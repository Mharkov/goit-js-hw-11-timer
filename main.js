

let timerDays = document.querySelector('span[data-value="days"]')
let timerHours = document.querySelector('span[data-value="hours"]')
let timerMinutes = document.querySelector('.value[data-value="mins"]')
let timerSeconds = document.querySelector('.value[data-value="secs"]')
const timerFace = document.getElementById("timer-1")


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
     
    }
    setInt=null 

    setInt = setInterval(() => {
        const nowDate = Date.now();
       const time = this.targetDate - nowDate;
       this.updateClockface(time);

         }, 1000)

updateClockface(time) {

const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

timerDays.textContent = `${days}`;
timerHours.textContent = `${hours}`;
timerMinutes.textContent = `${mins}`;
timerSeconds.textContent = `${secs}`;

}
    
pad(value) {
    return String(value).padStart(2, "0");
}
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 01, 2021'),
    
    });

