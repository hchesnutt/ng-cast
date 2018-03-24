angular.module('video-player')

  .component('app', {
  
    controller: function(youTube) {
      console.log(youTube);
      this.videos = window.exampleVideoData;
      this.selectedVideo = window.exampleVideoData[0];
      this.selectVideo = video => this.selectedVideo = video;
      this.searchYoutube = youTube;
      console.log(youTube);
    },
  
    templateUrl: 'src/templates/app.html'
  });



// someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
//   ...
//   $scope.aMethod = function() {
//     ...
//   }
//   ...
// }]);


//define a module
// var mainApp = angular.module("mainApp", []);
// ...

//create a service which defines a method square to return square of a number.
// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a); 
//    }
// });

// //inject the service "CalcService" into the controller
// mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
//    $scope.number = defaultInput;
//    $scope.result = CalcService.square($scope.number);
   
//    $scope.square = function() {
//       $scope.result = CalcService.square($scope.number);
//    }
// });