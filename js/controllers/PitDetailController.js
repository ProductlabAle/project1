livemapControllers.controller("PitDetailController", ["$scope", "$PitsList", "$routeParams", function ($scope, $PitsList, $routeParams) {
	$PitsList.success(function (data) {
		//console.log(data);
		$scope.pitId = $routeParams.pitId;
		//console.log($routeParams.pitId);
		$scope.pits = data;
		//$scope.pits = data[$routeParams.id];
	});
	//$scope.pits = Pits.query();
	$scope.title = "Benvenuto in LiveMap";
	//$scope.logo = "http://192.168.1.1/altervista_root/cms/livemap/img/home_cms.png";
}]);