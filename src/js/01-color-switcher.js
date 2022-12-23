const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");
stopBtn.disabled = true;

let timerId = null;

startBtn.addEventListener("click", startChangingColor);

stopBtn.addEventListener("click", stopChangingColor);

function startChangingColor() {

  timerId = setInterval(() => {
      bodyRef.style.backgroundColor = getRandomHexColor();
      console.log(`Body color is ${bodyRef.style.backgroundColor}`);
    stopBtn.disabled = false;
    startBtn.disabled = true;
  }, 1000);

}

function stopChangingColor() {

  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  stopBtn.disabled = true;
  startBtn.disabled = false;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}