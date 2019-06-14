'use strict';

/**
 * @ngdoc function
 * @name foodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodApp
 */
angular.module('foodApp')
  .controller('MainCtrl', function (FoodService) {
    var self = this;
    FoodService.getAllrecipes(function(res){
      self.foodData = res;
    });
    
    this.filterByCategory = function(name){
      this.categorySelected = name;
    }
    
    this.cartQuantity = FoodService.getCartQuantity();
    
  

});
