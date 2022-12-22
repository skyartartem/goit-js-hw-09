import throttle from 'lodash.throttle';
let localData = {};
const dataKey = "feedback-form-state";
const formEl = document.querySelector("form");

formEl.addEventListener("input", throttle(adFormDataToStorege, 500));

function adFormDataToStorege (evt) {
   localData[evt.target.name] = evt.target.value;
    localStorage.setItem(dataKey, JSON.stringify(localData));
}

formEl.addEventListener("submit", submit);

function submit (evt) {
    evt.preventDefault()
    console.log({email:formEl.elements.email.value,
    message:formEl.elements.message.value}); 
    formEl.reset();
    localStorage.removeItem(dataKey);
}

try {
    const data = localStorage.getItem(dataKey);
    const parsedData = JSON.parse(data);
    if (data) {formEl.elements.email.value = parsedData.email || ""
    formEl.elements.message.value = parsedData.message || ""
    }
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }
