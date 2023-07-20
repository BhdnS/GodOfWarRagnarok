import Validation from './Validation';

const validationData = new Validation({
  cvv: document.querySelector('#cvv'),
  cardNumber: document.querySelector('#cardNumber'),
  userName: document.querySelector('#userName'),
  cardDate: document.querySelector('#cardDate'),
});

validationData.validationCardCvv();
validationData.validationCardNumber();
validationData.validationUserName();
validationData.validationCardData();
