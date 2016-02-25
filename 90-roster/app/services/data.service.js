app.factory('DataService', function ($http) {
  var playerList = [];
  var service = {
    loadPlayers: function () {
      $http.get("http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson")
        .success(function (data) {
          // debugger;
          playerList = data.body.players;
          console.log(playerList);
        });
      console.log(playerList);
    },
    
    getAllPlayers: function () {
      var players = [];
      // debugger;
      for (var i = 0; i < playerList.length; i++) {
        if (playerList[i].firstname !== "") {
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
    }
  }
  return service;
});