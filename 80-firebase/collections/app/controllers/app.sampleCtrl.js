angular.module("sampleApp").controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://bcw2016.firebaseio.com/messages");  
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
    // clear out the "old" message
    //$scope.newMessageText = "";
  };
});