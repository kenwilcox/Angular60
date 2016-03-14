(function() {
    'use strict';

    angular
        .module('app', ['LocalForageModule'])
        .controller('MainController', MainController);

    function MainController($scope, $localForage) {
        var vm = this;
        vm.name = "";

        //$localForage.setItem("myName", "Ken Wilcox").then(function() {
        $localForage.getItem("myName").then(function(data) {
            vm.name = data;
        });
        //});
        vm.getItem = function(key, bindTo) {
            $localForage.getItem(key).then(function(data) {
                vm[bindTo] = data;
            });
        };
        
        vm.setItem = function(key, value) {
            $localForage.setItem(key, value).then(function(err, data) {
                console.log(err);
                console.log(data);
            });
        };
    }

})();