app.controller('RosterController', function ($scope, DataService) {
  $scope.players = [];
  var playerKey = 'players';

  var init = function () {
    var data = localStorage.getItem(playerKey);
    if (data) {
      $scope.players = JSON.parse(data);
    }
  }

  var saveData = function () {
    var players = angular.toJson($scope.players);
    localStorage.setItem(playerKey, players);
  }

  $scope.loadPlayers = function () {
    DataService.loadPlayers();
  };

  $scope.setPlayers = function () {
    $scope.players = DataService.getAllPlayers();
  }

  $scope.addPlayer = function () {
    
    var player = {
      fullname: $scope.fullname,
      position: $scope.position,
      jersey: $scope.jersey,
    };

    $scope.players.push(player);
    saveData();

    $scope.fullname = "";
    $scope.position = "";
    $scope.jersey = null;
  };

  $scope.removePlayer = function (index) {
    $scope.players.splice(index, 1);
    saveData();
  }

  init();
});