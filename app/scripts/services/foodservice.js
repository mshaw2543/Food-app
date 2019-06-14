'use strict';

/**
 * @ngdoc service
 * @name foodApp.FoodService
 * @description
 * # FoodService
 * Service in the foodApp.
 */
angular.module('foodApp')
  .service('FoodService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   var data;
   var cartObject ={count:0};
    

    function getAllrecipes (callback) {
      if(!data) {
       $http.get('http://temp.dash.zeta.in/food.php').then(
         function(response){
           data = response.data;
           callback(data);
         }
       );
      } else {
        callback(data);
      }
       
    };

    function getRecipeByName(name) {
      return data.recipes.find(function(obj) {
        return obj.name === name;
      });
    };
    function addQuantity(){
      cartObject.count ++;
    }

    function subQuantity(){
      cartObject.count --;
    }

    function getCartQuantity () {
      return cartObject;
    }

    return {
      getAllrecipes: getAllrecipes,
      getRecipeByName: getRecipeByName,
      addQuantity: addQuantity,
      subQuantity: subQuantity,
      getCartQuantity: getCartQuantity
    };

  });
