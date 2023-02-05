import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const onFormSubmit = event => {
  event.preventDefault();
  let firstDelay = Number(form.elements.delay.value);
  let currentDelay = firstDelay;
  let amount = Number(form.elements.amount.value);
  let step = Number(form.elements.step.value);
  if (amount <= 0) {
    Notify.failure('Amount should be greater than 0');
  } else {
    setTimeout(() => {
      form.reset();
    }, firstDelay);
    for (let i = 1; i <= amount; i += 1) {
      if (i > 1) {
        currentDelay = firstDelay += step;
      }
      createPromise(i, currentDelay).then(onSuccess).catch(onError);
    }
  }
};
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
