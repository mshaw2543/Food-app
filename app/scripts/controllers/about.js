'use strict';

/**
 * @ngdoc function
 * @name foodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foodApp
 */
angular.module('foodApp')
  .controller('AboutCtrl', function ($routeParams, FoodService) {
    console.log($routeParams.name);
    var self=this;
    FoodService.getAllrecipes(function(){
      self.recipe = FoodService.getRecipeByName($routeParams.name);
      //self.foodData = res;
    });

  });
