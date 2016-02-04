var livemapServices = angular.module('livemapServices', ['ngResource']);

/*livemapServices.factory('Pits', ['$resource',
  function ($resource) {
		return $resource('json/pits.json', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		});
  }]);*/

livemapServices.factory('Pits2', ['$http',
  function ($http) {
		return $http.get('json/pits.json')
			.success(function (data) {
				return data;
			})
			.error(function (data) {
				return data;
			});
  }]);