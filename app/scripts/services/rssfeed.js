'use strict';

/**
 * @ngdoc service
 * @name videoPlayerListUiApp.PodCastList
 * @description
 * # PodCastList
 * Service in the videoPlayerListUiApp.
 */
angular.module('videoPlayerListUiApp')
  .service('PodCastList', function (PodCastFeed, $q) {
    return {
      get: function (URL, maxCount) {
        var defer = $q.defer();
        PodCastFeed.fetch({q: URL, num: maxCount}, {}, function (data) {
          defer.resolve(data);
        });
        return defer.promise;
      }
    };
  });
