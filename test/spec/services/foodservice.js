'use strict';

describe('Service: FoodService', function () {

  // load the service's module
  beforeEach(module('foodApp'));

  // instantiate service
  var FoodService;
  beforeEach(inject(function (_FoodService_) {
    FoodService = _FoodService_;
  }));

  it('should do something', function () {
    expect(!!FoodService).toBe(true);
  });

});
