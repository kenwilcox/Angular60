angular.module('myRoster').directive('kwreplace', function() {
  return {
    restrict: 'A',
    scope: { kwreplace: '@' },
    link: function(scope, element, attrs) {
        element.one('load', function() {
            element.attr('src', scope.kwreplace);
        });
    }
  };
});