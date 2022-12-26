import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonEl = document.querySelector('button');
const inputDelay = document.querySelector(`input[name="delay"]`);
const inputStep = document.querySelector(`input[name="step"]`);
const inputAmount = document.querySelector(`input[name="amount"]`);

function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promis;
}

buttonEl.addEventListener('click', create);

function create(evt) {
  evt.preventDefault();
  const firstDelay = +inputDelay.value;
  const step = +inputStep.value;
  const amount = +inputAmount.value;

  for (let i = 0; i < amount; i += 1) {
    let delay = firstDelay + i * step;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}
