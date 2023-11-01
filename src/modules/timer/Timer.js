export default class Timer {
  constructor() {
    this.days = document.querySelector('#days');
    this.hours = document.querySelector('#hours');
    this.minutes = document.querySelector('#minutes');
  }

  startTimer(startDate) {
    const countdownStartDate = new Date(startDate).getTime();
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();

      const distance = now - countdownStartDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      this.days.textContent = this.formatTime(days);
      this.hours.textContent = this.formatTime(hours);
      this.minutes.textContent = this.formatTime(minutes);
    }, 1000);
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
