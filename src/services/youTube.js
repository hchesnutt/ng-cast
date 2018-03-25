
// Pass in a query, and a callback. Results get passed to callback
angular.module('video-player')
  .service('youTube', function ($http) { 
    
    this.search = function(query, callback) {
      var params = {
        q: query,
        maxResults: 5,
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video',
        key: window.YOUTUBE_API_KEY
      };
      
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: params
      }).then(({data}) => {
        console.log('success:', data.items);
        callback(data.items);
      }, error => {
        console.log('error:', error);
      });
    }
  });