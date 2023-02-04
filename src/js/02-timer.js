import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerBtn = document.querySelector('button[data-start]');
startTimerBtn.disabled = true;
startTimerBtn.classList.add("timer-button")

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= options.defaultDate) {
      Notify.failure('Please choose a date in the future');
      startTimerBtn.disabled = true;
    } else {
      startTimerBtn.disabled = false;
    }
  },
};
const datePicker = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startTimerBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    startTimer();
  }, 1000);
});

function startTimer() {
  const ms = datePicker.selectedDates[0] - Date.now();
  const timerTime = convertMs(ms);
  console.log(timerTime);
  const { days, hours, minutes, seconds } = timerTime;
  document.querySelector('span[data-days]').textContent = days;
  document.querySelector('span[data-hours]').textContent = hours;
  document.querySelector('span[data-minutes]').textContent = minutes;
  document.querySelector('span[data-seconds]').textContent = seconds;
  startTimerBtn.disabled = true;

  if (ms <= 1000) {
    clearInterval(timerId);
    Notify.success('Timer has stopped');
    }
};