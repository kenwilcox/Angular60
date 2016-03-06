angular.module("todoApp", []);

angular.module("todoApp").controller("TodoCtrl", function ($scope, $timeout) {
  $scope.items = [];

  function init() {
    var data = localStorage.getItem('items');
    if (data) {
      $scope.items = JSON.parse(data);
    }
  }

  $scope.add = function () {
    $scope.items.push($scope.item);
    localStorage.setItem('items', JSON.stringify($scope.items));
    $scope.item = "";
  }
  init();
});