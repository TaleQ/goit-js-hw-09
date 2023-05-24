Implemented tasks:

## Task 1 - color switcher

Do this task in the 01-color-switcher.html and 01-color-switcher.js files. Check
out the demo video of the switcher.

Write a script that, after clicking the "Start" button, changes the <body>
background color once a second to a random value using the inline style. When
clicking on the "Stop" button, background color change must stop.

! Please note that the «Start» button can be clicked an infinite number of
times. Make sure that the «Start» button is disabled while the theme change is
running.

## Task 2 - countdown timer

Do this task in the 02-timer.html and 02-timer.js files. Write a timer script
that counts down to a specific date. Such a timer can be used in blogs and
online stores, event-logging pages, during maintenance, etc. Watch a demo video
of the timer.

Use the flatpickr library to allow cross-browser selection of the end date and
time in a single UI element.

Date selection The onClose() method is called from the parameter object every
time the interface element that creates flatpickr is closed. It should be used
to handle the date selected by the user. The selectedDates parameter is an array
of the selected dates, so the first element is taken.

If the user selects a date from the past, show window.alert() with the text
"Please choose a date in the future". If the user has selected a valid date (in
the future), the "Start" button becomes active. The "Start" button must be
inactive until the user has selected a date in the future. When you click the
"Start" button, the countdown to the selected date starts from the time of
clicking. Countdown When you click on the "Start" button, the script must
calculate once a second how much time is left until the specified date and
update the timer interface, showing four numbers: days, hours, minutes and
seconds in the following format: xx:xx:xx:xx.

The number of days can be more than two digits. The timer must stop when it
reaches the end date, that is, 00:00:00:00. LET'S NOT COMPLICATE THINGS If the
timer is running, in order to select a new date and restart it, you need to
reload the page.

Notification library ! The following features are optional, but they will be a
good additional practice. Use the notiflix library to display notifications to
the user instead of window.alert().

## Task 3 - promise generator

Do this task in the 03-promises.html and 03-promises.js files. Watch a demo
video of the promise generator.

In HTML, there is form markup; in its fields, the user will enter the first
delay in milliseconds, the delay increment for each promise after the first one
and the number of promises to be created.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

Write a script that, when submitting the form, calls the createPromise(position,
delay) function as many times as you entered in the amount field. On each call,
pass it the number of the promise to be created (position) and the delay given
the first delay (delay) and step (step) entered by the user.

Supplement the code of the createPromise function so that it returns one promise
that will be fulfilled or rejected after delay time. The value of the promise
must be an object containing the position and delay properties with the values
of these parameters. Use the initial function code to choose whether to fulfill
or reject the promise.

createPromise(2, 1500) .then(({ position, delay }) => {
console.log(`✅ Fulfilled promise ${position} in ${delay}ms`); }) .catch(({
position, delay }) => {
console.log(`❌ Rejected promise ${position} in ${delay}ms`); });

Notification library ! The following features are optional, but they will be a
good additional practice. Use the notiflix library to display notifications to
the user instead of console.log().
