import { Video } from './Video'

const videoData = new Video({
  title: document.querySelector('#videoTitle'),
  btn: document.querySelector('#videoBtn'),
  video: document.querySelector('#video'),
})

videoData.playVideo();
videoData.stopVideo();