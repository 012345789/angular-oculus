'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('youtubePlayer', function($sce) {
  return {
    restrict: 'EA',
    scope: { videoCode: '=' },
    replace: true,
    templateUrl: 'partials/currentVideo.html',
    controller: 'VideoController',
    //template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{videoLink}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function(scope) {
      console.log('test');
      scope.$watch('videoCode', function (newVal) {
        if (newVal) {
          scope.videoLink = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);

        }
        console.log(scope.videoLink);
      });
    }
  };
});
