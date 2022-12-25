import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const buttonEl = document.querySelector('button[data-start]');

buttonEl.disabled = true;

// inputEl.value = Date();
console.dir(flatpickr);
console.dir(inputEl);
console.dir(buttonEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log("1111");
    //   let milisecs = Date(selectedDates[0]).prototype.getMilliseconds();
    //   console.log(milisecs);

    //   console.log(selectedDates[0]);
    //   if (Date(selectedDates[0) < Date()) {
    //     window.alert('Please choose a date in the future');
    //   }
  },
};

// const calendar = flatpickr(inputEl, options);

// console.dir(calendar.selectedDates[0].getMilliseconds(0));