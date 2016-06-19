'use strict';

/**
 * @ngdoc function
 * @name videoPlayerListUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoPlayerListUiApp
 */
angular.module('videoPlayerListUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.podListButtonUpName = 'Scroll Up';
    $scope.podListButtonDownName = 'Scroll Down';

    // TODO load from rss feed
    $scope.podCast = {
      title: 'PodCast Title',
      description: 'The best PodCast videos ever',
      videoList: [
        {title: 'Pod Video 01', src: 'http://video1', date: Date.now() + 1, description: 'amazing video from ... 01'},
        {title: 'Pod Video 02', src: 'http://video2', date: Date.now() + 2, description: 'amazing video from ... 02'},
        {title: 'Pod Video 03', src: 'http://video3', date: Date.now() + 3, description: 'amazing video from ... 03'},
        {title: 'Pod Video 04', src: 'http://video4', date: Date.now() + 4, description: 'amazing video from ... 04'},
        {title: 'Pod Video 05', src: 'http://video5', date: Date.now() + 5, description: 'amazing video from ... 05'},
        {title: 'Pod Video 06', src: 'http://video6', date: Date.now() + 6, description: 'amazing video from ... 06'}
      ]
    };

  });
