'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  // .controller('MainVideoController', function($scope) {
  	// $scope.videoID = OlXrjTh7vHc;
  // })

  .controller('MainVideoController', ['$route', '$routeParams', '$location', '$scope',
    function($route, $routeParams, $location, $scope) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.videoCode = 'LqOfPkHGq9U'; //for testing
  }])

  .controller('VideoController', ['$routeParams', '$scope', '$sce', function($routeParams, $scope, $sce) {
    this.name = "VideoController";
    //this.params = $routeParams;  un-needed
    //$scope.videoLink2 = $routeParams.videoID;  un-needed
    $scope.fullVideoLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + this.params.videoID);
    //^ IT FINALLY WORKS ^
    //$scope.videoLink = $sce.trustAsResourceUrl(params.videoID);
  }])

  // .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
  //   this.name = "ChapterCtrl";
  //   this.params = $routeParams;
  // }])

  .controller('MyCtrl2', [function() {

  }]);
