'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

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
    var herokuKey = 'AIzaSyBkMaXiJH6ziTI05fR0wDyRn5N7qGMqGHU';
    apiKey = herokuKey;
    $scope.dynamicToken = ''; //initializes as an empty string. Meaning it starts at pageToken = none, resulting in first page of search results

    $scope.dynamicYoutubeLink = function(pageToken) {
      if(pageToken) {
        $scope.dynamicToken = pageToken;
        getVideo();
      } else {
        $scope.dynamicToken = $scope.dynamicToken;
      }
    };

    var getVideo = function() {
      $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&key=' + apiKey + '&pageToken=' + $scope.dynamicToken, {cache: true}).success(function(data) {
        $scope.videoList = data.items;
        $scope.nextPageToken = data.nextPageToken;
        $scope.prevPageToken = data.prevPageToken;
        $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&pageToken=' + $scope.nextPageToken + '&key=' + apiKey).success(function(data) {
          $scope.nextVideoThumbnail = data.items[0].snippet.thumbnails.default.url;
          $scope.nextVideoTitle = data.items[0].snippet.title;
        });
        $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=oculusvr&maxResults=1&pageToken=' + $scope.prevPageToken + '&key=' + apiKey).success(function(data) {
          $scope.prevVideoThumbnail = data.items[0].snippet.thumbnails.default.url;
          $scope.prevVideoTitle = data.items[0].snippet.title;
        });
      });
    };

    getVideo();

    $scope.getIframeSrc = function(videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };
    $scope.fullVideoLink = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + this.params.videoID);
  }]);