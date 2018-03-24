angular.module('video-player')

.component('app', {
  
  controller: function() {
    
    this.videos = window.exampleVideoData;
    this.selectedVideo = window.exampleVideoData[0];
    
    console.log(this);
  },
  
  templateUrl: 'src/templates/app.html'
});
