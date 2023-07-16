export class Video {
  constructor(params) {
    this.title = params.title;
    this.btn = params.btn;
    this.video = params.video;
  }

  playVideo() {
    this.btn.addEventListener('click', (e) => {
      this.btn.classList.add('display_none');
      this.title.classList.add('display_none');
      this.video.play();
    });
  }

  stopVideo() {
    this.video.addEventListener('click', (e) => {
      this.btn.classList.remove('display_none');
      this.title.classList.remove('display_none');
      this.video.pause();  
    })
  }
}