angular.module("countdownApp", []);

angular.module("countdownApp").controller("CountdownCtrl", function($scope, $timeout) {
  $scope.counter = 10;
  $scope.message = "";
  var timer = null;
  
  function countdown() {
    $scope.counter--;
    if ($scope.counter <= 0) {
      cancelTimer();
      $scope.message = "Time's up!";
    } else {
      createTimer();
    }
  }
  
  function cancelTimer() {
    $timeout.cancel(timer);
    timer = null;
  }
  
  function createTimer() {
    timer = $timeout(countdown, 1000); 
  }
  
  $scope.toggle = function() {
     if (timer != null) {
       cancelTimer();
     } else {
       //timer = $timeout(countdown, 1000);
       createTimer();
    }
  }
});