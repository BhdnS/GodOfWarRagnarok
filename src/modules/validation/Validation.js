export default class Validation {
  constructor(params) {
    this.cvv = params.cvv;
    this.cardNumber = params.cardNumber;
    this.userName = params.userName;
    this.cardDate = params.cardDate;
  }

  validationCardCvv() {
    this.cvv.addEventListener('input', (e) => {
      const inputValue = e.target.value;
      const filteredValue = inputValue.replace(/[^0-9]/g, '');
      e.target.value = filteredValue;
    });
  }

  validationCardNumber() {
    this.cardNumber.addEventListener('input', (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue.replace(/\D/g, '');
      inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
      e.target.value = inputValue;
    });
    this.cardNumber.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        return false;
      }
    });
  }

  validationUserName() {
    this.userName.addEventListener('input', (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue.replace(/[^A-Za-z\s]/g, '');
      e.target.value = inputValue;
    });
  }

  validationCardData() {
    this.cardDate.addEventListener('input', (e) => {
      let inputValue = e.target.value;
      inputValue = inputValue.replace(/\D/g, '');
      let month = inputValue.slice(0, 2);
      const year = inputValue.slice(2, 4);

      if (month > 12) {
        month = 12;
      }

      const formattedValue = `${month}/${year}`;
      e.target.value = formattedValue;
    });
  }
}
