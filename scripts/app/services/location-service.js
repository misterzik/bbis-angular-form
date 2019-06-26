(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('LocationService', ['$http', 'settings', function ($http, settings) {
        var service = this;
        var _apiBase = settings.serviceBase + 'webapi/';

        service.getCountries = function () {
            return $http.get(_apiBase + 'country');
        };

        service.getStatesForCountry = function (countryId) {
            return $http.get(_apiBase + 'country/' + countryId + '/state');
        };
    }]);
})();