export class Popup {
	constructor(params) {
		this.buttons = params.buttons;
		this.popupPrice = params.popupPrice;
		this.popup = params.popup;
		this.closePopup = params.closePopup;
		this.body = params.body;
	}

	buyClick() {
		this.buttons.forEach(el => {
			el.addEventListener('click', (e) => {
				const datasetPrice = e.target.dataset.price;
				this.popupPrice.textContent = datasetPrice;
				this.popup.classList.remove('display_none');
				this.body.classList.add('hidden')
			})
		});
	}

	closeClick() {
		this.closePopup.addEventListener('click', () => {
			this.popup.classList.add('display_none');
			this.body.classList.remove('hidden')
		})
	}
}