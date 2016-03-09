(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService, _) {
        $scope.name = "";

        $scope.greetings = [];

        $scope.greet = function () {
            var msg = MainService.greet($scope.name);
            $scope.greetings.push(_.replace(msg, "Hello", "Goodbye"));
        };
        
        
    }
})();