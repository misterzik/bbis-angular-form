(function() {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');
    app.service('StateService',
        function() {
            var _service = this;
            var _storageObject = localStorage;

            _service.saveGiftDesignations = function(designations) {
                _storageObject.designations = angular.toJson(designations);
            }

            _service.restoreGiftDesignations = function() {
                if (!_storageObject.designations || _storageObject.designations.length <= 0) {
                    return [];
                }

                return angular.fromJson(_storageObject.designations);
            }

            _service.removeGiftDesignations = function() {
                if (_storageObject.hasOwnProperty('designations')) {
                    delete _storageObject.designations;
                }
            };
        });
})();