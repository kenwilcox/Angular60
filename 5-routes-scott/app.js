/*global angular */
var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    controller: "SimpleController",
    templateUrl: "View1.html"
  })
  .when("/view2", {
    controller: "SimpleController",
    templateUrl: "View2.html"
  })
  .when("/error", {
    templateUrl: "error.html"
  })
  .otherwise({
    redirectTo: "/error"
  });
  
  $locationProvider.html5Mode(true);
  //$locationProvider.hashPrefix("!");
});

app.controller("SimpleController", function($scope) {
  $scope.customers = [
    { name: "Ken Wilcox", city: "Boise" },
    { name: "Matt Overall", city: "Nampa" },
    { name: "Jake Overall", city: "Nampa" },
  ];
  
  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name,
      city: $scope.newCustomer.city
    });
  }  
});
