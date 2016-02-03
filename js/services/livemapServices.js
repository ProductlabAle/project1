var livemapServices = angular.module('livemapServices', ['ngResource']);

livemapServices.factory('Pits', ['$resource',
  function ($resource) {
        return $resource('json/pits.json', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: true
            }
        });
  }]);