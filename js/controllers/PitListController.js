livemapControllers.controller("PitListController", ["$scope", "Pits2", function ($scope, Pits2) {
	Pits2.success(function (data) {
		//console.log(data);
		$scope.pits = data;
	});
	//$scope.pits = Pits.query();
	$scope.title = "Benvenuto in LiveMap";
	//$scope.logo = "http://192.168.1.1/altervista_root/cms/livemap/img/home_cms.png";
}]);