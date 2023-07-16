import { Timer } from './Timer'

const dataTimer = new Timer ({
	days: document.querySelector('#days'),
	hours: document.querySelector('#hours'),
	minutes: document.querySelector('#minutes')
})

dataTimer.startTimer('2022-10-19');