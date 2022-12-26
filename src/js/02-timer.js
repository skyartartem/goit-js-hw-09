import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.getElementById('datetime-picker');
const buttonEl = document.querySelector('button[data-start]');

const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// console.dir(refs);
buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(Date.now());
    // console.log(selectedDates[0].getTime());
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      return;
    }
    buttonEl.disabled = false;
  },
};

const calendar = flatpickr(inputEl, options);

buttonEl.addEventListener('click', startTimer);

function startTimer() {
  const idInt = setInterval(() => {
    const time = calendar.selectedDates[0].getTime() - Date.now();
    const objTime = convertMs(time);

    // console.log(objTime);

    refs.days.textContent = pad(objTime.days);
    refs.hours.textContent = pad(objTime.hours);
    refs.minutes.textContent = pad(objTime.minutes);
    refs.seconds.textContent = pad(objTime.seconds);

    if (calendar.selectedDates[0].getTime() - Date.now() < 500) {
      clearInterval(idInt);
      Notify.success('Time is up');
      // alert('time is up');
      refs.days.textContent = '00';
      refs.hours.textContent = '00';
      refs.minutes.textContent = '00';
      refs.seconds.textContent = '00';
    }
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
