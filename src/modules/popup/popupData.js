import Popup from './Popup';

const popupData = new Popup({
  buttons: document.querySelectorAll('.click'),
  popupPrice: document.querySelector('#popupPrice'),
  popup: document.querySelector('#popup'),
  closePopup: document.querySelector('#closePopup'),
  body: document.querySelector('body'),
});

popupData.buyClick();
popupData.closeClick();
