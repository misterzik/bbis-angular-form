(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('DonationService', ['$http', 'StateService', 'settings', function ($http, StateService, settings) {
        var _service = this;
        _service.giftTotal = 0;

        var _donationService = new BLACKBAUD.api.DonationService($('.BBDonationApiContainer').data('partid'));
        var _onlineGivingBase = settings.serviceBase + 'handler/onlinegiving/onlinegivinghandler.ashx?m=';

        var _marketingParams = {
            'finderNumber': BLACKBAUD.api.querystring.getQueryStringValue('efndnum'),
            'sourceId': BLACKBAUD.api.querystring.getQueryStringValue('srcid'),
            'sourceTypeId': BLACKBAUD.api.querystring.getQueryStringValue('srctid'),
            'trackingId': BLACKBAUD.api.querystring.getQueryStringValue('trid'),
            'emailRecipId': BLACKBAUD.api.querystring.getQueryStringValue('erid'),
            'appealId': BLACKBAUD.api.querystring.getQueryStringValue('appid'),
            'sourceCode': BLACKBAUD.api.querystring.getQueryStringValue('srccode')
        };

        _service.donation = {
            'Donor': { 'Address': {}, 'Spouse': {} },
            'Gift': {
                'Designations': [],
                'Recurrence': {},
                'Tribute': { 'TributeDefinition': {} },
                'FinderNumber': _marketingParams.finderNumber || 0,
                'SourceCode': _marketingParams.sourceCode 
            },
            'Origin': {
                'AppealId': _marketingParams.appealId,
                'PageId': BLACKBAUD.api.pageInformation.pageId
            },
            "BBSPReturnUri": settings.BBSPReturnUri,
            "BBSPTemplateSitePageId": settings.BBSPTemplateSitePageId,
            "MerchantAccountId": settings.merchantAccountId
        };

        _service.addGift = function (designation) {
            _service.donation.Gift.Designations.push({
                'Name': designation.name,
                'description': designation.description || '',
                'DesignationId': designation.designationId,
                'Amount': parseInt(designation.amount) || ''
            });
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.removeGift = function (index) {
            _service.donation.Gift.Designations.splice(index, 1);
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.updateGiftAmount = function () {
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.setDesignations = function (designations) {
            _service.donation.Gift.Designations = designations;
            _updateGiftTotal();
        }
        _service.confirmDonation = function (transactionId) {
            var confirmPromise = new Promise(function (resolve, reject) {

                _donationService.completeBBSPDonation(transactionId,
                    function (data) {
                        _donationService.getDonationConfirmationHtml(transactionId,
                            function (html) {
                                resolve(html);
                                StateService.removeGiftDesignations();
                            },
                            function (error) {
                                reject(error);
                            });
                    },
                    function (errors) {
                        reject(errors);
                    });
            });

            return confirmPromise;
        };

        _service.postDonation = function (data) {
            var postPromise = new Promise(function (resolve, reject) {
                _donationService.createDonation(data,
                    function (donation) {
                        resolve(donation);
                    },
                    function (errors) {
                        reject(errors);
                    });
            });

            return postPromise;
        };

        _service.searchDesignations = function (searchTerm, hidePromoted) {

            return $http.post(_onlineGivingBase +
                'searchdesignations&pid=' +
                settings.rootDesignationId +
                '&s=' +
                searchTerm +
                '&rp=' +
                hidePromoted);
        }

        _service.searchAllDesignations = function (searchTerm) {
            return $http.post(_onlineGivingBase +
                'searchdesignations&pid=&s=' +
                searchTerm +
                '&rp=false');
        };

        _service.submitDonation = function (giftOptions) {
            if (!giftOptions.isTributeGift) {
                delete _service.donation.Gift.Tribute;
            } else {
                _service.donation.Gift.Tribute.TributeDefinition.Description = _service.donation.Gift.Tribute.TributeDefinition.Type + ' ' +
                    _service.donation.Gift.Tribute.TributeDefinition.FirstName + ' ' + _service.donation.Gift.Tribute.TributeDefinition.LastName;
            }

            if (!giftOptions.isRecurringGift) {
                delete _service.donation.Gift.Recurrence;
            } else {
                var now = new Date();
                _service.donation.Gift.Recurrence.StartDate = now.toLocaleString('en-us');
                _service.donation.Gift.Recurrence.DayOfMonth = now.getDate();

                switch (_service.donation.Gift.Recurrence.Frequency) {
                    case '1': //weekly
                        _service.donation.Gift.Recurrence.DayOfWeek = now.getDay();
                        delete _service.donation.Gift.Recurrence.DayOfMonth;
                        break;
                    case '4': //annually
                        _service.donation.Gift.Recurrence.Month = now.getMonth() + 1;
                        break;
                }
            }

            if (giftOptions.isJointGift) {
                _service.donation.Gift.Comments = '\r\rJoint Gift With Spouse: ' + _service.donation.Donor.Spouse.FirstName + ' ' + _service.donation.Donor.Spouse.LastName;
            }

            if (giftOptions.isEmployeeMatch) {
                _service.donation.Gift.Comments += '\r\rMatching Company Name: ' + _service.donation.Gift.CompanyName;
            }

            return _service.postDonation(_service.donation);
        }

        var _updateGiftTotal = function () {
            _service.giftTotal = 0;
          
            for (var i = 0; i < _service.donation.Gift.Designations.length; i++) {
                _service.giftTotal = _service.giftTotal + parseInt(_service.donation.Gift.Designations[i].Amount || 0);
            }
        }
    }]);
})();