var livemapControllers = angular.module('livemapControllers', []);

livemapControllers.controller("PitList", ["$scope", "Pits", function ($scope, Pits) {
    $scope.pits = Pits.query();
    $scope.title = "Benvenuto in LiveMap";
    //$scope.logo = "http://192.168.1.1/altervista_root/cms/livemap/img/home_cms.png";
}]);

livemapControllers.controller("headerController", ["$scope", function ($scope) {
    $scope.title = "Benvenuto in LiveMap";
}]);

livemapControllers.controller("footerController", ["$scope", function ($scope) {
    $scope.logo = "http://192.168.1.1/altervista_root/cms/livemap/img/home_cms.png";
}]);