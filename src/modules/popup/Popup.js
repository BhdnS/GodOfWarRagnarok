export default class Popup {
  constructor() {
    this.buttons = document.querySelectorAll('.click');
    this.popupPrice = document.querySelector('#popupPrice');
    this.popup = document.querySelector('#popup');
    this.closePopup = document.querySelector('#closePopup');
    this.body = document.querySelector('body');
  }

  buyClick() {
    this.buttons.forEach((el) => {
      el.addEventListener('click', (e) => {
        const datasetPrice = e.target.dataset.price;
        this.popupPrice.textContent = datasetPrice;
        this.popup.classList.remove('display_none');
        this.body.classList.add('hidden');
      });
    });
  }

  closeClick() {
    this.closePopup.addEventListener('click', () => {
      this.popup.classList.add('display_none');
      this.body.classList.remove('hidden');
    });
  }
}
