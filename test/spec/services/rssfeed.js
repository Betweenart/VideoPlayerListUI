'use strict';

describe('Service: PodCastList', function () {

  // load the service's module
  beforeEach(module('videoPlayerListUiApp'));

  // instantiate service
  var PodCastList;
  beforeEach(inject(function (_PodCastList_) {
    PodCastList = _PodCastList_;
  }));

  it('should do something', function () {
    expect(!!PodCastList).toBe(true);
  });

});
