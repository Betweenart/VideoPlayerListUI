'use strict';

/**
 * @ngdoc function
 * @name videoPlayerListUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the videoPlayerListUiApp
 */
angular.module('videoPlayerListUiApp')
  .controller('AboutCtrl', function ($rootScope, $scope) {
    $rootScope.activePage = 'about';

    $scope.options = [
      'Loading rss feed with video PodCast',
      'Playing Videos chosen from list',
      'Dynamic list, controlled with keys'
    ];

    $scope.libs = [
      'AngularJS',
      'Google Feed API',
      'Bootstrap',
      'Grunt',
      'Bower',
      'NPM'
    ];

    $scope.tests = [
      'JS Hint',
      'Karma'
    ];
  });
