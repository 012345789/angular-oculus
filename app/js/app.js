'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngAnimate',
  'ngSanitize',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function($routeProvider, $locationProvider, $sceDelegateProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MainVideoController'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/Video/:videoID', {templateUrl: 'partials/currentVideo.html', controller: 'VideoController', controllerAs: 'video'});
  $routeProvider.otherwise({redirectTo: '/view1'});
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**']);
  $locationProvider.html5Mode(true);
}]);
