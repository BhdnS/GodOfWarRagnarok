export default class Explore {
  constructor(params) {
    this.exploreOne = params.exploreOne;
    this.exploreListOne = params.exploreListOne;
    this.exploreTwo = params.exploreTwo;
    this.exploreListTwo = params.exploreListTwo;
    this.minimum = params.minimum;
    this.recommended = params.recommended;
    this.standard = params.standard;
    this.limited = params.limited;
    this.explorePrice = params.explorePrice;
    this.changePrice = params.changePrice;
  }

  clickOne() {
    this.exploreOne.addEventListener('change', () => {
      if (this.exploreOne.classList.contains('minimum')) {
        this.exploreOne.classList.remove('minimum');
        this.exploreOne.classList.add('recommended');
        this.minimum.classList.remove('check_white');
        this.minimum.classList.add('check_dark');
        this.recommended.classList.remove('check_dark');
        this.recommended.classList.add('check_white');
        this.exploreListOne.innerHTML = `
        <li class="explore_flex__box-list"><span class="list_blue">CPU</span>: Intel i7-4500 (4 core 4.3 GHz)</li>
        <li class="explore_flex__box-list"><span class="list_blue">RAM</span>: 16 GB</li>
        <li class="explore_flex__box-list"><span class="list_blue">OS</span>: Windows 11 64-bit</li>
        <li class="explore_flex__box-list"><span class="list_blue">VIDEOCARD</span>: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)</li>
        <li class="explore_flex__box-list"><span class="list_blue">PIXEL SHADER</span>: 5.1</li>
        <li class="explore_flex__box-list"><span class="list_blue">VERTEX SHADER</span>: 5.1</li>
        <li class="explore_flex__box-list"><span class="list_blue">FREE DISK SPACE</span>: 100 GB</li>
        <li class="explore_flex__box-list"><span class="list_blue">DEDICATED VIDEO RAM</span>: 16 GB</li>`;
      } else if (this.exploreOne.classList.contains('recommended')) {
        this.exploreOne.classList.add('minimum');
        this.exploreOne.classList.remove('recommended');
        this.minimum.classList.add('check_white');
        this.minimum.classList.remove('check_dark');
        this.recommended.classList.add('check_dark');
        this.recommended.classList.remove('check_white');
        this.exploreListOne.innerHTML = `
        <li class="explore_flex__box-list"><span class="list_blue">CPU</span>: Intel i5-2500k (4 core 3.3 GHz)</li>
        <li class="explore_flex__box-list"><span class="list_blue">RAM</span>: 8 GB</li>
        <li class="explore_flex__box-list"><span class="list_blue">OS</span>: Windows 10 64-bit</li>
        <li class="explore_flex__box-list"><span class="list_blue">VIDEOCARD</span>: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)</li>
        <li class="explore_flex__box-list"><span class="list_blue">PIXEL SHADER</span>: 5.1</li>
        <li class="explore_flex__box-list"><span class="list_blue">VERTEX SHADER</span>: 5.1</li>
        <li class="explore_flex__box-list"><span class="list_blue">FREE DISK SPACE</span>: 70 GB</li>
        <li class="explore_flex__box-list"><span class="list_blue">DEDICATED VIDEO RAM</span>: 4 GB</li>`;
      }
    });
  }

  clickTwo() {
    this.exploreTwo.addEventListener('change', () => {
      if (this.exploreTwo.classList.contains('standard')) {
        this.exploreTwo.classList.remove('standard');
        this.exploreTwo.classList.add('limited');
        this.standard.classList.remove('check_white');
        this.standard.classList.add('check_dark');
        this.limited.classList.remove('check_dark');
        this.limited.classList.add('check_white');
        this.exploreListTwo.innerHTML = `
        <li class="explore_flex__box-list"><span class="list_blue">Platform</span>: PS5</li>
        <li class="explore_flex__box-list"><span class="list_blue">Premiere</span>: 26.5.2018</li>
        <li class="explore_flex__box-list"><span class="list_blue">Publisher</span>: Sony Interactive Entertainment Europe</li>
        <li class="explore_flex__box-list"><span class="list_blue">Species</span>: Action, Adventure</li>
        <li class="explore_flex__box-list"><span class="list_blue">Voice</span>: English, Polish, Russian, Chez, Italia</li>
        <li class="explore_flex__box-list"><span class="list_blue">Display languages</span>: English, Dutch, Polish, Russian, Turkish</li>`;
        this.changePrice.dataset.price = '35.99$';
        this.explorePrice.textContent = '35.99$';
      } else if (this.exploreTwo.classList.contains('limited')) {
        this.exploreTwo.classList.add('standard');
        this.exploreTwo.classList.remove('limited');
        this.standard.classList.add('check_white');
        this.standard.classList.remove('check_dark');
        this.limited.classList.add('check_dark');
        this.limited.classList.remove('check_white');
        this.exploreListTwo.innerHTML = `
        <li class="explore_flex__box-list"><span class="list_blue">Platform</span>: PS4</li>
        <li class="explore_flex__box-list"><span class="list_blue">Premiere</span>: 20.4.2018</li>
        <li class="explore_flex__box-list"><span class="list_blue">Publisher</span>: Sony Interactive Entertainment Europe</li>
        <li class="explore_flex__box-list"><span class="list_blue">Species</span>: Action, Adventure</li>
        <li class="explore_flex__box-list"><span class="list_blue">Voice</span>: English, Polish, Russian</li>
        <li class="explore_flex__box-list"><span class="list_blue">Display languages</span>: English, Dutch, Polish, Russian, Turkish</li>`;
        this.changePrice.dataset.price = '19.99$';
        this.explorePrice.textContent = '19.99$';
      }
    });
  }
}
