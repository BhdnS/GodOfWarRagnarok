export default class Slider {
  constructor() {
    this.left = document.querySelector('#left');
    this.right = document.querySelector('#right');
    this.slider = document.querySelector('#slider');
    this.slideOne = document.querySelector('#slideOne');
    this.slideTwo = document.querySelector('#slideTwo');
    this.slideThree = document.querySelector('#slideThree');

    this.slides = [this.slideOne, this.slideTwo, this.slideThree];
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
  }

  clickLeft() {
    this.left.addEventListener('click', () => {
      this.showPrevSlide();
    });
  }

  clickRight() {
    this.right.addEventListener('click', () => {
      this.showNextSlide();
    });
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  showNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.showSlide(this.currentIndex);
    this.updateButtonStates();
  }

  showPrevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(this.currentIndex);
    this.updateButtonStates();
  }

  updateButtonStates() {
    this.left.disabled = this.currentIndex === 0;
    this.right.disabled = this.currentIndex === this.totalSlides - 1;
  }
}
