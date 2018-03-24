angular.module('video-player')

  .component('videoPlayer', {
    
    templateUrl: 'src/templates/videoPlayer.html',
    
    bindings: {
      selectedVideo: '<'
    },
    
    controller: function() {
      console.log(this.selectedVideo);
    }
  });


