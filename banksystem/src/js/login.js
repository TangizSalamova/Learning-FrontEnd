import {
  nameValidate,
  surnameValidate,
  passwordValidate,
  repeatPasswordValidate,
} from "../utils/validation.js";

const loginButton = document.querySelector(".form-login");
const formMain = document.querySelector(".form-main");
const hiddenButton = document.querySelector("#hidden");
const passwordInp = document.querySelector("#password");

// Hidden Button path

hiddenButton.addEventListener("click", () => {
  if (passwordInp.getAttribute("type") === "password") {
    passwordInp.setAttribute("type", "text");
  } else {
    passwordInp.setAttribute("type", "password");
  }
});

// Login buttonunun hereketi

loginButton.addEventListener("mouseover", (e) => {
  e.preventDefault();
  const { name, surname, password, repeatPassword } = formMain.elements;

  if (!name.value || !password.value) {
    loginButton.classList.toggle("right");
    loginButton.innerHTML = "hahahaha";
  } else {
    loginButton.innerHTML = "Register";
  }
});

// error message

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const { name, password } = formMain.elements;

  const nameResult = nameValidate(name.value.trim());
  const passwordResult = passwordValidate(password.value.trim());

  const errorName = document.querySelector("#error-name");
  const errorPassword = document.querySelector("#error-password");

  if (!nameResult.success) {
    errorName.innerHTML = nameResult.message;
  } else {
    errorName.innerHTML = "";
  }

  if (!passwordResult.success) {
    errorPassword.innerHTML = passwordResult.message;
  } else {
    errorPassword.innerHTML = "";
  }

  const errorServer = document.querySelector("#error-server");

  if (nameResult.success && passwordResult.success) {
    const oldName = localStorage.getItem("name");
    const oldPassword = localStorage.getItem("password");

    if (oldName == name.value && oldPassword == password.value) {
      errorServer.innerHTML = "";
      window.location.href = "./bank.html";
    } else {
      errorServer.innerHTML = "Passoword ve ya name Sehvdir!";
    }
  }
});
