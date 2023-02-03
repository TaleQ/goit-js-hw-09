const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
let timerId = null;
stopBtn.disabled = true;

const startSwitchColor = () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};
const stopSwitchColor = () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener('click', startSwitchColor);
stopBtn.addEventListener('click', stopSwitchColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
