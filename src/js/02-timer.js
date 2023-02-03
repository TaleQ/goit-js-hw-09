import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerBtn = document.querySelector('button[data-start]');
startTimerBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      Notify.warning('Please choose a date in the future');
      startTimerBtn.disabled = true;
    } else {
      startTimerBtn.disabled = false;
    }
  },
};
flatpickr("#datetime-picker", options);