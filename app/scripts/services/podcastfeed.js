'use strict';

/**
 * @ngdoc service
 * @name videoPlayerListUiApp.PodCastFeed
 * @description
 * # PodCastFeed
 * Factory in the videoPlayerListUiApp.
 */
angular.module('videoPlayerListUiApp')
  .factory('PodCastFeed', function ($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
      fetch: {method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'}}
    });
  });
