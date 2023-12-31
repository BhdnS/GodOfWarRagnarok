export default class Faq {
  constructor() {
    this.faq = document.querySelector('#faq');
    this.faqBtnOne = document.querySelector('#faqBtnOne');
    this.faqTxtOne = document.querySelector('#faqTxtOne');
    this.faqBtnTwo = document.querySelector('#faqBtnTwo');
    this.faqTxtTwo = document.querySelector('#faqTxtTwo');
    this.iconOne = document.querySelector('#iconOne');
    this.iconTwo = document.querySelector('#iconTwo');
  }

  click() {
    let isFaqOneVisible = false;
    let isFaqTwoVisible = false;
    this.faq.addEventListener('click', (e) => {
      if (e.target.id === 'faqBtnOne') {
        if (isFaqOneVisible) {
          this.faqBtnOne.classList.remove('deg');
          this.iconOne.classList.remove('active');
          this.faqTxtOne.classList.add('display_none');
          isFaqOneVisible = false;
        } else {
          this.faqBtnOne.classList.add('deg');
          this.iconOne.classList.add('active');
          this.faqTxtOne.classList.remove('display_none');
          isFaqOneVisible = true;
        }
      }
      if (e.target.id === 'faqBtnTwo') {
        if (isFaqTwoVisible) {
          this.faqBtnTwo.classList.remove('deg');
          this.faqTxtTwo.classList.add('display_none');
          this.iconTwo.classList.remove('active');
          isFaqTwoVisible = false;
        } else {
          this.faqBtnTwo.classList.add('deg');
          this.iconTwo.classList.add('active');
          this.faqTxtTwo.classList.remove('display_none');
          isFaqTwoVisible = true;
        }
      }
    });
  }
}
