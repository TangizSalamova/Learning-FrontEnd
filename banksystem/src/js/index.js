import {
  nameValidate,
  surnameValidate,
  passwordValidate,
  repeatPasswordValidate,
} from "../utils/validation.js";

const registrButton = document.querySelector(".form-registerBtn");
const formMain = document.querySelector(".form-main");
const hiddenButton = document.querySelector("#hidden");
const hiddenButtonRep = document.querySelector("#hiddenRep");
const passwordInp = document.querySelector("#password");
const passworRepInp = document.querySelector("#repead-password");

// Hidden Button path
hiddenButton.addEventListener("click", () => {
  if (passwordInp.getAttribute("type") === "password") {
    passwordInp.setAttribute("type", "text");
  } else {
    passwordInp.setAttribute("type", "password");
  }
});

hiddenButtonRep.addEventListener("click", () => {
  if (passworRepInp.getAttribute("type") === "password") {
    passworRepInp.setAttribute("type", "text");
  } else {
    passworRepInp.setAttribute("type", "password");
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

registrButton.addEventListener("click", (e) => {
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

  if (
    nameResult.success &&
    passwordResult.success &&
    repeatPasswordResult.success &&
    surnameResult.success
  ) {
    localStorage.setItem("name", name.value.trim());
    localStorage.setItem("password", password.value.trim());

    window.location.href = "./pages/login.html";
  }
});

// alert("Hello World");
