(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = "";
  $scope.noOfItems=0;

  $scope.create = function () {
    var totalNameValue = $scope.name;
    var comma = ',';
    var noOfItems = splitString(totalNameValue, comma);
    if((noOfItems) > 3)
          {
            $scope.totalValue = "Too much!";
          }
      else{
          $scope.totalValue="Enjoy";
          }
  
  };
    
    
    function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        var total = arrayOfStrings.length;
        return total;
    }
});


})();