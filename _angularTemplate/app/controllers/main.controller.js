(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService) {
        $scope.name = ""

        $scope.greetings = []

        $scope.greet = function () {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)
        }
    }
})();