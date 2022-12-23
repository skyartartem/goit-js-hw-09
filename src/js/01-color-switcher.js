const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");
let timerId = null;

stopBtn.disabled = true;

startBtn.addEventListener("click", startChangingColor);

stopBtn.addEventListener("click", stopChangingColor);

function startChangingColor() {

    stopBtn.disabled = false;
    startBtn.disabled = true;
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log(`Body color is ${bodyRef.style.backgroundColor}`);
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
        console.log(`Body color is ${bodyRef.style.backgroundColor}`);
    
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