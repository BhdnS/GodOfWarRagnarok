export default class Video {
  constructor() {
    this.title = document.querySelector('#videoTitle');
    this.btn = document.querySelector('#videoBtn');
    this.video = document.querySelector('#video');
  }

  playVideo() {
    this.btn.addEventListener('click', () => {
      this.btn.classList.add('display_none');
      this.title.classList.add('display_none');
      this.video.play();
    });
  }

  stopVideo() {
    this.video.addEventListener('click', () => {
      this.btn.classList.remove('display_none');
      this.title.classList.remove('display_none');
      this.video.pause();
    });
  }
}
