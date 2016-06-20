'use strict';

describe('Controller: PodCastCtrl', function () {

  // load the controller's module
  beforeEach(module('videoPlayerListUiApp'));

  var PodCastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PodCastCtrl = $controller('PodCastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PodCastCtrl.podCast).toBeDefined();
  });
});
