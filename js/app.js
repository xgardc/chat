connectToFirebase();

let myName = undefined;
let darkMode = false;

const nameInputArea = document.querySelector("#name-input-area");
const messageArea = document.querySelector("#message-area");

const nameInput = document.querySelector("#name-input");
const nameForm = document.querySelector("#name-form");

const messageInput = document.querySelector("#message-input");
const messageForm = document.querySelector("#message-form");

const messages = document.querySelector("#messages");

const darkModeToggler = document.querySelector("#dark-mode-toggler");

messageArea.style.display = "none";

nameInput.focus();

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  myName = nameInput.value;
  nameInput.value.length > 2 &&
    (() => {
      nameInputArea.style.display = "none";
      messageArea.style.display = "block";
      messageInput.focus();
    })();
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageInput.value !== "" &&
    newMessage({ author: myName, content: messageInput.value });
  messageInput.value = null;
});

darkModeToggler.addEventListener("click", () => {
  darkMode = !darkMode;
  refreshDarkMode();
});

const refreshDarkMode = () => {
  nameInput.focus();
  messageInput.focus();
  darkMode
    ? document.querySelector("html").classList.add("inverted")
    : document.querySelector("html").classList.remove("inverted");
};
