const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  nameForm.classList.add(HIDDEN_CLASSNAME);
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreetings(username);
}

function printGreetings(username) {
  greeting.innerText = `Welcome, ${username}! `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  nameForm.addEventListener("submit", onLoginSubmit);
} else {
  printGreetings(savedUsername);
}
