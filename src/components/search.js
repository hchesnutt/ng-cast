angular.module('video-player')
  .component('search', {
    templateUrl: 'src/templates/search.html',
    
    bindings: {
      search: '<',
      result: '<'
    }
  });
  

angular.module('video-player')
  .directive('myEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keyup", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.myEnter);
          });
          event.preventDefault();
        }
      });
    };
  });