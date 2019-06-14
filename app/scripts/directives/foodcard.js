'use strict';

/**
 * @ngdoc directive
 * @name foodApp.directive:foodCard
 * @description
 * # FoodCard
 */
angular.module('foodApp')
  .directive('foodCard', function ($location, FoodService) {
    return {
      templateUrl: 'scripts/templates/foodCard.html',
      restrict: 'E',
      scope: {
        'recipe': '='
      },
      link: function postLink(scope, element, attrs) {
        // element.text('this is the foodCard directive');
        scope.showDetails = function(recipe){
          $location.path('/details/'+recipe.name);
        };
        scope.addToCart = function(recipe){
          recipe.count = 1;
          FoodService.addQuantity();
        }
        scope.removeItem = function(recipe){
          recipe.count --;
          FoodService.subQuantity();
        }
        scope.addItem = function(recipe){
          recipe.count ++;
          FoodService.addQuantity();
        }
      }
    };
  });
