(function() {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('DonationServiceMock', ['$http', 'StateServiceMock', 'BlackBaudServiceMock', 'settings', function($http, StateService, BlackBaudService, settings) {
        var _service = this;
        _service.giftTotal = 0;

        var _marketingParams = {
            'finderNumber': BlackBaudService.getQueryStringValue('efndnum'),
            'sourceId': BlackBaudService.getQueryStringValue('srcid'),
            'sourceTypeId': BlackBaudService.getQueryStringValue('srctid'),
            'trackingId': BlackBaudService.getQueryStringValue('trid'),
            'emailRecipId': BlackBaudService.getQueryStringValue('erid'),
            'appealId': BlackBaudService.getQueryStringValue('appid'),
            'sourceCode': BlackBaudService.getQueryStringValue('srccode')
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
                'PageId': BlackBaudService.pageInformation.pageId
            },
            "BBSPReturnUri": settings.BBSPReturnUri,
            "BBSPTemplateSitePageId": settings.BBSPTemplateSitePageId,
            "MerchantAccountId": settings.merchantAccountId
        };

        _service.addGift = function(designation) {
            _service.donation.Gift.Designations.push({
                'Name': designation.name,
                'description': designation.description || '',
                'DesignationId': designation.designationId,
                'Amount': parseInt(designation.amount) || ''
            });
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.removeGift = function(index) {
            _service.donation.Gift.Designations.splice(index, 1);
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.updateGiftAmount = function() {
            _updateGiftTotal();
            StateService.saveGiftDesignations(_service.donation.Gift.Designations);
        };

        _service.setDesignations = function(designations) {
            _service.donation.Gift.Designations = designations;
            _updateGiftTotal();
        }
        _service.confirmDonation = function(transactionId) {
            return _promiseHelper(transactionId);
        };

        _service.postDonation = function(data) {
            return _promiseHelper(data);
        };

        var _promiseHelper = function(jsonReturnObject) {
            var promise = new Promise(function(resolve, reject) {
                resolve(jsonReturnObject);
            });
            return promise;
        };

        _service.searchDesignations = function(searchTerm, hidePromoted) {
            var data = [{
                    "description": "Cupcake ipsum dolor sit amet. Cake chupa chups pudding gummi bears gummies cupcake bear claw chupa chups sugar plum. Jelly icing danish bonbon topping toffee.",
                    "designationId": "bd5bb3e5-b4b0-410f-830a-a1b3ae33a299",
                    "name": "Cancer"
                },
                {
                    "description": "Cupcake ipsum dolor sit amet. Cake chupa chups pudding gummi bears gummies cupcake bear claw chupa chups sugar plum. Jelly icing danish bonbon topping toffee.",
                    "designationId": "3b2b15f3-6bd4-478d-8b3f-8d7ee8b35c9e",
                    "name": "Child Support"
                }
            ];
            return _promiseHelper(data);
        }

        _service.searchAllDesignations = function(searchTerm) {
            var data = [{
                    "description": "Cupcake ipsum dolor sit amet. Cake chupa chups pudding gummi bears gummies cupcake bear claw chupa chups sugar plum. Jelly icing danish bonbon topping toffee.",
                    "designationId": "bd5bb3e5-b4b0-410f-830a-a1b3ae33a299",
                    "name": "Cancer"
                },
                {
                    "description": "Cupcake ipsum dolor sit amet. Cake chupa chups pudding gummi bears gummies cupcake bear claw chupa chups sugar plum. Jelly icing danish bonbon topping toffee.",
                    "designationId": "3b2b15f3-6bd4-478d-8b3f-8d7ee8b35c9e",
                    "name": "Child Support"
                }
            ];
            return _promiseHelper(data);
        };

        _service.submitDonation = function(giftOptions) {

            return _promiseHelper(service.donation);
        }

        var _updateGiftTotal = function() {
            _service.giftTotal = 0;

            for (var i = 0; i < _service.donation.Gift.Designations.length; i++) {
                _service.giftTotal = _service.giftTotal + parseInt(_service.donation.Gift.Designations[i].Amount || 0);
            }
        }
    }]);
})();