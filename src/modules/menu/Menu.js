export default class Menu {
  constructor(params) {
    this.menu = params.menu;
    this.menuItem = params.menuItem;
  }

  scroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.menuItem.classList.add('display_none');
        this.menuItem.classList.remove('display_flex');
      } else {
        this.menuItem.classList.remove('display_none');
      }
    });
  }

  click() {
    this.menu.addEventListener('click', () => {
      this.menuItem.classList.remove('display_none');
      this.menuItem.classList.toggle('display_flex');
    });
  }
}
