angular.module("sampleApp").controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://bcw2016.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});