angular.module('myRoster').factory('DataService', function ($http) {
  var playerList = [];
  var loading = false;

  var service = {

    loadPlayers: function () {
      loading = true;
      $http.get("http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson")
        .success(function (data) {
          // debugger;
          playerList = data.body.players;
          console.log(playerList);
          loading = false;
        });
      console.log(playerList);
    },

    loadingPlayers: function () {
      return loading;
    },

    playerCount: function () {
      if (playerList) {
        return playerList.length;
      }
      return 0;
    },

    getAllPlayers: function () {
      var players = [];
      // debugger;
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].firstname !== "" && playerList[i].photo !== "https://auth.cbssports.com/images/players/unknown-player-170x170.png") {
          players.push(playerList[i]);
        }
      }
      return players;
    },

    getPlayersByTeam: function (team) {
      var players = [];
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].pro_team === team) {
          players.push(playerList[i]);
        }
      }
      return players;
    },

    getPlayersByPosition: function (position) {
      var players = [];
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].position === position) {
          players.push(playerList[i]);
        }
      }
      return players;
    },

    getPlayersByStuff: function (field, value) {
      var players = [];
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i][field] === value) {
          players.push(playerList[i]);
        }
      }
      return players;
    }
  }
  return service;
});