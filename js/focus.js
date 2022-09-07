const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusHeader = document.querySelector(".focus-header");
const yourFocus = document.querySelector(".your-focus");
const yourFocusText = document.querySelector(".your-focus-text");
const whatFocus = document.querySelector(".what-focus");


focusInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("focus", focusInput.value);
    console.log(localStorage.getItem("focus"));
    ifLocal()
  }
});

ifLocal()

yourFocusText.addEventListener("click", () => {
  localStorage.removeItem("focus");
  ifLocal()
});

function ifLocal() {
  if (localStorage.getItem("focus") === null || undefined) {
    whatFocus.style.display = "flex";
    yourFocus.style.display = "none";
  } else {
    whatFocus.style.display = "none";
    yourFocus.style.display = "flex ";
    yourFocusText.textContent = localStorage.getItem("focus");
  }
}