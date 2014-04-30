'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngSanitize',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MainVideoController'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  //{{:videoID}}?
  $routeProvider.when('/Video/:videoID', {templateUrl: 'partials/currentVideo.html', controller: 'VideoController', controllerAs: 'video'});
  $routeProvider.otherwise({redirectTo: '/view1'});
  //$locationProvider.html5Mode(true);
}]);//.
// directive('youtubePlayer', function($sce) {
//   return {
//     restrict: 'EA',
//     scope: {videoCode: '='},
//     replace: true,
//     templateUrl: 'partials/currentVideo.html',
//     link: function(scope) {
//       scope.$watch('videoCode', function (newVal) {
//         if (newVal) {
//           scope.videoLink = $sce.trustAsResource("newVal");
//         }
//       });
//     }
//   };
// });

