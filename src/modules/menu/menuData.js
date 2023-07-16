import { Menu } from './Menu'

const menuData = new Menu({
	menu: document.querySelector('#menu'),
	menuItem: document.querySelector('#menuItem'),
})

menuData.scroll();
menuData.click();