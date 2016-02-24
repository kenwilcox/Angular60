app.controller('RosterController', function ($scope) {
  $scope.players = [];
  var playerKey = 'players';

  var init = function () {
    var data = localStorage.getItem(playerKey);
    if (data) {
      $scope.players = JSON.parse(data);
      // debugger;
    }
  }

  var saveData = function () {
    // debugger;
    var players = angular.toJson($scope.players);
    localStorage.setItem(playerKey, players);
  }

  $scope.addPlayer = function () {

    var player = {
      name: $scope.playerName,
      position: $scope.playerPosition,
      number: $scope.playerNumber,
    };

    $scope.players.push(player);
    saveData();

    $scope.playerName = "";
    $scope.playerPosition = "";
    $scope.playerNumber = null;
  };

  $scope.removePlayer = function (index) {
    $scope.players.splice(index, 1);
    saveData();
  }

  init();
});