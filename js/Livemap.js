var livemap = angular.module("livemap", ["ngRoute", "livemapControllers", "ui.bootstrap"]); //viene crato un modulo con il nome Livemap e un array vuoto (dependencies)

/*livemap.config(['$resourceProvider', function ($resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);*/

livemap.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			controller: "PitListController",
			templateUrl: "views/pitlist.html"
		})
		.when("/pitdetail/:pitId", {
			controller: "PitDetailController",
			templateUrl: "views/pitdetail.html"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);

//livemap Controller

var livemapControllers = angular.module('livemapControllers', []);
/*var livemapServices = angular.module('livemapServices', ['ngResource']);

/*livemapControllers.controller("headerController", ["$scope", function ($scope) {
    $scope.title = "LiveMap";
}]);*/

/*livemapControllers.controller("footerController", ["$scope", function ($scope) {
    $scope.logo = "http://192.168.1.1/altervista_root/cms/livemap/img/home_cms.png";
}]);*/

//livemap services

/*var livemapServices = angular.module('livemapServices', ['ngResource']);

livemapServices.factory('Pits2', ['$http',
  function ($http) {
		return $http.get('json/pits.json')
			.success(function (data) {
				return data;
			})
			.error(function (data) {
				return data;
			});
  }]);*/