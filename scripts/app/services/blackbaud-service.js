(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('BlackbaudServiceMock', ['$http', 'settings', function ($http, settings) {
        var service = this;

        service.pageInformation =  { 
            'pageId': BLACKBAUD.api.pageInformation.pageId
        };
        
        service.getQueryStringValue = function(queryStringParam) {
            return BLACKBAUD.api.querystring.getQueryStringValue(queryStringParam);
        };

        service.getDonationObjectFromPartId = function(partId){
            return new BLACKBAUD.api.DonationService(partId);
        }
    }]);
})();