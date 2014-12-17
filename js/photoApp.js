'use strict';

var app = angular.module('PhotoApp', []);

app.controller('PhotoController', [ '$scope', function($scope){
  $scope.photos = ['flatirons_snow', 
                  'hydrant', 
                  'berries', 
                  'fireworks', 
                  'fly_blur', 
                  'hopper', 
                  'ice', 
                  'jamaica1', 
                  'jamaica2', 
                  'links', 
                  'lizard', 
                  'man', 
                  'num8', 
                  'quaterback', 
                  'road', 
                  'rocky', 
                  'seashells', 
                  'sunrise1', 
                  'sunset1', 
                  'tess1'];

  $scope.amount = 10;
  $scope.loadText = "Load More";

  $scope.loadMore = function() {
    $scope.amount += 5;
    if ($scope.amount >= $scope.photos.length) {
      $scope.loadText = "";
    };
  };

}]);
