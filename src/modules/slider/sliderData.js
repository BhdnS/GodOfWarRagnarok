import Slider from './Slider';

const sliderData = new Slider({
  left: document.querySelector('#left'),
  right: document.querySelector('#right'),
  slider: document.querySelector('#slider'),
  slideOne: document.querySelector('#slideOne'),
  slideTwo: document.querySelector('#slideTwo'),
  slideThree: document.querySelector('#slideThree'),
});

sliderData.clickLeft();
sliderData.clickRight();
