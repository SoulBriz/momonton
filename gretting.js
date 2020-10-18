const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  time = document.querySelector(".time"),
  greeting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";


function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

 /*
function Greeting() {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);

  const currentTime = time.innerText;
  time.addEventListener();

  if (currentTime >= "00:00:00" && currentTime < "06:00:00") {
    greeting.innerText = "Good Night";
  } else if (currentTime >= "06:00:00" && currentTime < "12:00:00") {
    greeting.innerText = "Good Morning";
  } else if (currentTime >= "12:00:00" && currentTime < "18:00:00") {
    greeting.innerText = "Good Afternoon";
  } else if (currentTime >= "18:00:00" && currentTime <= "23:59:59") {
    greeting.innerText = "Good Evening";
  }
}
*/

function init() {
  loadName();
  //Greeting();
}

init();
