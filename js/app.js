var livemap = angular.module("livemap", ["livemapServices", "livemapControllers"]); //viene crato un modulo con il nome Livemap e un array vuoto (dependencies)

livemap.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);