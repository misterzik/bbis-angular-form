(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('BlackBaudServiceMock', ['$http', 'settings', function ($http, settings) {
        var service = this;

        service.pageInformation =  { 
            'pageId': 1
        };
        
        service.getQueryStringValue = function(queryStringParam) {
            return '';
        };

        
        service.getDonationObjectFromPartId = function(partId){
            return {'success' : 'true'};
        }
    }]);
})();