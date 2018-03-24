// angular.module('video-player')
//   .service('youTube', function(){
//   var params = {
//     key: window.YOUTUBE_API,
//     q: 'cats',
//     maxResults: 5,
//     part: 'snippet'
//   };
//   // $.ajax({
//   //   url: 'https://www.googleapis.com/youtube/v3/search',
//   //   method: 'GET',
//   //   contentType: 'application/json',
//   //   data: params,
//   //   success: data => {
//   //     console.log('woot you were succ3$$', data);
//   //   },
//   //   error: error => {
//   //     console.log('you screwed the pooch and YA DONE FUCKED UP');
//   //   }
//   // })
// });
  
  
angular.module('video-player')
  .service('youTube', function ($http){ 
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function successCallback(response) {
      console.log('success');
    }, function errorCallback(response) {
      console.log('error');
    });
  });