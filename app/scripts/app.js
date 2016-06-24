'use strict';

/**
 * @ngdoc overview
 * @name videoPlayerListUiApp
 * @description
 * # videoPlayerListUiApp
 *
 * Main module of the application.
 */
angular
  .module('videoPlayerListUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/podcast.html',
        controller: 'PodCastCtrl',
        controllerAs: 'podCast'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
