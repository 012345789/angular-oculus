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
  }])

  .controller('VideoController', ['$routeParams', '$scope', '$sce', '$http', function($routeParams, $scope, $sce, $http) {
    this.name = "VideoController";
    this.params = $routeParams;
    var apiKey = 'AIzaSyDy4TuYNtqRGCENOikEs-20m3zBWw0yE3Q'; //this key is unique to my IP address. if you need to test this on your computer, please give me your IP address so I can allow you access
    
    $scope.whereToStart = function(pageToken) {
      if($scope.nextPageToken || $scope.prevPageToken) {
        return 1;//someToken;
      } else {
        return "";
      }
    };

    $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&key=' + apiKey).success(function(data) {
      $scope.videoList = data.items;
      $scope.nextPageToken = data.nextPageToken;
      $scope.prevPageToken = data.prevPageToken;
      $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&pageToken=' + $scope.nextPageToken + '&key=' + apiKey).success(function(data) {
        $scope.nextVideoThumbnail = data.items[0].snippet.thumbnails.default.url;
      });
      $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&pageToken=' + $scope.prevPageToken + '&key=' + apiKey).success(function(data) {
        $scope.prevVideoThumbnail = data.items[0].snippet.thumbnails.default.url;
      });
    });

    $scope.getIframeSrc = function(videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };
    //$scope.videoLink2 = $routeParams.videoID;  un-needed
    $scope.fullVideoLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + this.params.videoID);
    //$scope.trustedVideoList = $sce.trustAsHtml($scope.videoList);
    //$scope.videoLink = $sce.trustAsResourceUrl(params.videoID);
  }])

  // .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
  //   this.name = "ChapterCtrl";
  //   this.params = $routeParams;
  // }])

  .controller('MyCtrl2', [function() {

  }]);
