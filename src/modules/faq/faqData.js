import { Faq } from './Faq'

const faqData = new Faq({
  faq: document.querySelector('#faq'),
  faqBtnOne: document.querySelector('#faqBtnOne'),
  faqTxtOne: document.querySelector('#faqTxtOne'),
  faqBtnTwo: document.querySelector('#faqBtnTwo'),
  faqTxtTwo: document.querySelector('#faqTxtTwo'),
  iconOne: document.querySelector('#iconOne'),
  iconTwo: document.querySelector('#iconTwo'),
})

faqData.click();
