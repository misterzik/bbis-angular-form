(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    var onlineGivingController = function ($http, settings, initData, LocationService, StateService, DonationService) {
        var vm = this;
        vm.isSubmit = false;
        vm.errorMessage = '';
        vm.donation = DonationService.donation;
        vm.settings = settings;

        vm.regex = {
            'phone': '.*\\d{3}([-]|\\s)?\\d{3}([-]|\\s)?\\d{4}',
            'postal': '',
            'email': '([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})'
        }

        var _ask = {
            'designationId': BLACKBAUD.api.querystring.getQueryStringValue('did'),
            'amount': BLACKBAUD.api.querystring.getQueryStringValue('amt')
        };

        vm.giftOptions = {}
        vm.giftOptions.isRecurringGift = false;
        vm.giftOptions.isJointGift = false;
        vm.giftOptions.isTributeGift = false;
        vm.giftOptions.isEmployeeMatch = false;

        vm.transactionId = BLACKBAUD.api.querystring.getQueryStringValue('t');

        vm.minimumGiftAmount = settings.minimumGiftAmount;

        vm.promotedDesignations = [];
        vm.profile = [];
        vm.tributes = [];
        vm.searchResults = [];
        vm.countries = [];
        vm.states = [];

        vm.init = function () {
            if (vm.transactionId !== '') {
                _transactionSetup();
                return;
            }

            _loadAskAmount();
            _initialSetup();
        };


        vm.addGift = function (designation) {
            if (vm.giftSelected(designation)) {
                return;
            }

            DonationService.addGift(designation);
        };

        vm.removeGift = function (index) {
            DonationService.removeGift(index);
        };

        vm.giftSelected = function (designation) {
            var giftSelected = false;
            DonationService.donation.Gift.Designations.forEach(function (item) {
                if (item.DesignationId === designation.designationId) {
                    giftSelected = true;
                    return;
                }
            });

            return giftSelected;
        };


        vm.getGiftTotal = function() {
             return DonationService.giftTotal;
        }

        vm.showDescription = function (description) {
            alert(description);
        };

        vm.searchDesignations = function () {

            if (vm.searchTerm === '') {
                vm.searchResults = [];
                return;
            }

            var hidePromoted = true;
            DonationService.searchDesignations(vm.searchTerm, hidePromoted)
                .success(function (data) {
                    vm.searchResults = data;
                });
        };

        vm.setStates = function (stateId) {
            vm.states = [];
            var countryId = '';

            for (var i = 0; i < vm.countries.length; i++) {
                var country = vm.countries[i];
                if (country.Abbreviation.toLowerCase() === DonationService.donation.Donor.Address.Country.toLowerCase()) {
                    countryId = country.Id;
                    break;
                }
            }

            if (countryId === '') {
                return;
            }

            LocationService.getStatesForCountry(countryId)
                .success(function (data) {
                    vm.states = data;

                    if (stateId == null || vm.profile == null) {
                        return;
                    }

                    DonationService.donation.Donor.Address.State = vm.profile.state;
                });
        };

        vm.setTributeType = function (tributeId) {
            DonationService.donation.Gift.Tribute.TributeDefinition.Type = tributeId;
        }

        vm.updateGiftAmount = function () {
            DonationService.updateGiftAmount();
        };

        vm.submitDonation = function () {

            if (vm.isSubmit) {
                return;
            }

            vm.errorMessage = '';
            vm.isSubmit = true;

            DonationService.submitDonation(vm.giftOptions)
                .then(function (donation) {
                    vm.isSubmit = false;
                })
                .catch(function (errors) {
                    if (console) {
                        console.log(errors);
                    }

                    var message = '';
                    for (var i = 0; i < errors.length; i++) {
                        message = errors[i].Message;
                        if (message === null) {
                            continue;
                        }
                    }

                    vm.isSubmit = false;

                    if (message !== '') {
                        vm.errorMessage += message;
                        return;
                    }

                    vm.errorMessage = 'There was a problem submitting your donation.  Please check your information and try again.';
                });
        };

        var _transactionSetup = function () {
            DonationService.confirmDonation(vm.transactionId)
                    .then(function (html) {
                        $('#online-giving-confirmation').html(html);
                    })
                    .catch(function (errors) {
                        console.log(errors);
                    });
            return;
        };

        var _loadAskAmount = function () {
            if (!_ask.designationId) {
                return;
            }

            DonationService.searchAllDesignations(_ask.designationId)
                .success(function (data) {
                    if (data.length < 1) {
                        return;
                    }
                    var designation = data[0];
                    designation.amount = _ask.amount;

                    vm.addGift(designation);
                });
        };

        var _initialSetup = function () {
            LocationService.getCountries()
                .success(function (data) {
                    vm.countries = data;
                    DonationService.setDesignations(StateService.restoreGiftDesignations());
                })
                .then(function () {
                    vm.promotedDesignations = initData.designations;
                    vm.profile = initData.profile;
                    vm.tributes = initData.tributes;

                    if (vm.profile) {
                        DonationService.donation.Donor.Address.Country = vm.profile.country;
                        vm.setStates(vm.profile.state);
                        _setProfileData();
                    } else {
                        DonationService.donation.Donor.Address.Country = 'USA';
                        vm.setStates(null);
                    }
                });
        };

        var _setProfileData = function () {
            DonationService.donation.Donor.Address.City = vm.profile.city;
            DonationService.donation.Donor.Address.Country = vm.profile.country;
            DonationService.donation.Donor.Address.State = vm.profile.state;
            DonationService.donation.Donor.Address.PostalCode = vm.profile.postalCode;
            DonationService.donation.Donor.Address.StreetAddress = vm.profile.streetAddress;

            DonationService.donation.Donor.FirstName = vm.profile.firstName;
            DonationService.donation.Donor.LastName = vm.profile.lastName;
            DonationService.donation.Donor.Spouse.FirstName = vm.profile.spouseFirstName;
            DonationService.donation.Donor.Spouse.LastName = vm.profile.spouseLastName;
            DonationService.donation.Donor.Phone = vm.profile.phone;
            DonationService.donation.Donor.EmailAddress = vm.profile.emailAddress;
        };
    };

    onlineGivingController.$inject = [
        '$http', 'settings', 'initData', 'LocationService', 'StateService', 'DonationService'
    ];
    app.controller('OnlineGivingCtrl', onlineGivingController);
})();
