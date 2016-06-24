'use strict';

/**
 * @ngdoc function
 * @name videoPlayerListUiApp.controller:PodCastCtrl
 * @description
 * # PodCastCtrl
 * Controller of the videoPlayerListUiApp
 */
angular.module('videoPlayerListUiApp')
  .controller('PodCastCtrl', function ($rootScope, $scope, PodCastList, $log) {
    $rootScope.activePage = 'podCast';

    var feedUrl = 'http://rss.cnn.com/services/podcasting/sitroom/rss.xml';

    $scope.podListButtonUpName = 'Scroll Up';
    $scope.podListButtonDownName = 'Scroll Down';
    $scope.podCast = null;

    // get feed from wherever we need
    PodCastList.get(feedUrl).then(function (data) {
      $scope.podCast = data.responseData.feed;

      // parse date for display filter
      if ($scope.podCast.entries) {
        for (var i = 0; i < $scope.podCast.entries.length; i++) {
          $scope.podCast.entries[i].publishedDate = new Date($scope.podCast.entries[i].publishedDate);
        }
      }
      $log.debug($scope.podCast);
    });

    $scope.activeVideoDescription = 'description of video here';

    // video list
    // TODO UI movement
  });
