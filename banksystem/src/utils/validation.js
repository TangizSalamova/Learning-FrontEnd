export let nameValidate = (name) => {
  if (!name.length) {
    return {
      success: false,
      message: "Zəhmət olmasa Name əlavə edin",
    };
  } else if (name.length < 3) {
    return {
      success: false,
      message: "Name uzunluğu min 3 olmalıdır ",
    };
  } else if (name.length > 10) {
    return {
      success: false,
      message: "Name uzunluğu max 10 olmalıdır",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
};

export let surnameValidate = (surname) => {
  if (!surname.length) {
    return {
      success: false,
      message: "Zəhmət olmasa Surname əlavə edin",
    };
  } else if (surname.length < 8) {
    return {
      success: false,
      message: "Surname uzunluğu min 8 olmalıdır ",
    };
  } else if (surname.length > 15) {
    return {
      success: false,
      message: "Surname uzunluğu max 15 olmalıdır",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
};

export let passwordValidate = (password) => {
  if (!password.length) {
    return {
      success: false,
      message: "Zəhmət olmasa Password əlavə edin",
    };
  } else if (password.length < 8) {
    return {
      success: false,
      message: "Password uzunluğu min 8 olmalıdır ",
    };
  } else if (password.length > 15) {
    return {
      success: false,
      message: "Password uzunluğu max 15 olmalıdır",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
};

export let repeatPasswordValidate = (repeatPassword, password) => {
  if (repeatPassword === password) {
    return {
      success: true,
      message: "Successfully",
    };
  } else {
    return {
      success: false,
      message: "Passwordlar uyğun deyil",
    };
  }
};
