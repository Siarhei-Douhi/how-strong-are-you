const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const passwordLanguageRegExp = /^[A-z\d]+$/;
const useNameRegExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
const onlyNumberRegExp = /^[ 0-9]+$/;
const countryRegExp = /^[a-zA-Z]+$/;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,}$/;

const ENTER_PASSWORD = "Введите пароль";
const WRONG_PASSWORD_LANGUAGE =
  "Пароль должен состоять только из цифр и латинских букв";
const WRONG_PASSWORD_FORMAT =
  "Пароль должен содержать не менее 1 цифры, 1 прописной и 1 строчной буквы";
const WRONG_PASSWORD_LENGTH =
  "Пароль должен содержать не менее 8 символов и не более 30 символов";

export const validateNumber = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }
  if (!onlyNumberRegExp.test(value)) {
    return "Использовать только цифры";
  }

  return "";
};

export const validateCountry = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }
  if (!countryRegExp.test(value)) {
    return "Использовать только латинские буквы";
  }

  return "";
};

export const validateRequired = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }
  if (!useNameRegExp.test(value)) {
    return "Имя пользователя должно начинаться с буквы и содержать 2-20 символов";
  }

  return "";
};

export const validateEmail = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }

  if (!emailRegExp.test(value)) {
    return "Неправильный формат email";
  }

  return "";
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return "Пороли не совпадают";
  }

  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return ENTER_PASSWORD;
  }

  if (!passwordLanguageRegExp.test(password)) {
    return WRONG_PASSWORD_LANGUAGE;
  }

  if (!passwordRegExp.test(password)) {
    return WRONG_PASSWORD_FORMAT;
  }

  if (password.length < 8) {
    return WRONG_PASSWORD_LENGTH;
  }

  if (password.length > 30) {
    return WRONG_PASSWORD_LENGTH;
  }

  return "";
};
