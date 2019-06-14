'use strict';

describe('Directive: FoodCard', function () {

  // load the directive's module
  beforeEach(module('foodApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-food-card></-food-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the FoodCard directive');
  }));
});
