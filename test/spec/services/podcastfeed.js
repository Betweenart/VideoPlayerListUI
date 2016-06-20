'use strict';

describe('Service: PodCastFeed', function () {

  // load the service's module
  beforeEach(module('videoPlayerListUiApp'));

  // instantiate service
  var PodCastFeed;
  beforeEach(inject(function (_PodCastFeed_) {
    PodCastFeed = _PodCastFeed_;
  }));

  it('should do something', function () {
    expect(!!PodCastFeed).toBe(true);
  });

});
