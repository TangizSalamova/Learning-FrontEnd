import {
  nameValidate,
  surnameValidate,
  passwordValidate,
  repeatPasswordValidate,
} from "../utils/validation.js";

const registrButton = document.querySelector(".form-registerBtn");
const formMain = document.querySelector(".form-main");
const hiddenButton = document.querySelector("#hidden");
const passwordInp = document.querySelector("#password");

// Hidden Button path
hiddenButton.addEventListener("click", () => {
  if (passwordInp.getAttribute(type) === "passwprd") {
    passwordInp.setAttribute("type", "text");
  } else {
    passwordInp.setAttribute("type", "password");
  }
});

// Registr buttonunun hereketi
registrButton.addEventListener("mouseover", (e) => {
  e.preventDefault();
  const { name, surname, password, repeatPassword } = formMain.elements;

  if (
    !name.value ||
    !surname.value ||
    !password.value ||
    !repeatPassword.value
  ) {
    registrButton.classList.toggle("right");
    registrButton.innerHTML = "hahahaha";
  } else {
    registrButton.innerHTML = "Register";
  }
});

// error message 

formRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const { name, surname, password, repeatPassword } = formMain.elements;

  const nameResult = nameValidate(name.value.trim());
  const surnameResult = surnameValidate(surname.value.trim());
  const passwordResult = passwordValidate(password.value.trim());
  const repeatPasswordResult = repeatPasswordValidate(
    repeatPassword.value.trim(),
    password.value.trim()
  );

  const errorName = document.querySelector("#error-name");
  const errorSurname = document.querySelector("#error-surname");
  const errorPassword = document.querySelector("#error-password");
  const errorRepeatPassword = document.querySelector("#error-repeatPassword");

  if (!nameResult.success) {
    errorName.innerHTML = nameResult.message;
  } else {
    errorName.innerHTML = "";
  }
  if (!surnameResult.success) {
    errorSurname.innerHTML = surnameResult.message;
  } else {
    errorSurname.innerHTML = "";
  }
  if (!passwordResult.success) {
    errorPassword.innerHTML = passwordResult.message;
  } else {
    errorPassword.innerHTML = "";
  }
  if (!repeatPasswordResult.success) {
    errorRepeatPassword.innerHTML = repeatPasswordResult.message;
  } else {
    errorRepeatPassword.innerHTML = "";
  }
});

