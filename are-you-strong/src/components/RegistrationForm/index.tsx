import style from "./style.module.css";
import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validation";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser(event.target.value);
  };
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfirm(event.target.value);
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setEmailError(error);
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handleUserlBlur = () => {
    const error = validateRequired(user);
    setUserError(error);
  };

  const handleUserlFocus = () => {
    setUserError("");
  };

  const handlePasswordlBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handlePasswordlFocus = () => {
    setPasswordError("");
  };

  const handleConfirmlBlur = () => {
    const error = validateConfirmPassword(confirm, password);
    setConfirmError(error);
  };

  const handleConfirmlFocus = () => {
    setConfirmError("");
  };

  const onClickLogin = () => {
    setError("");
    const errors = {
      user: validateRequired(user),
      email: validateEmail(email),
      password: validatePassword(password),
      confirm: validateConfirmPassword(password, confirm),
    };

    setUserError(errors.user);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmError(errors.confirm);

    const isValidForm = Object.values(errors).every((error) => error === "");

    if (isValidForm) {
      const promise = registerUser(user, email, password);
      let isOk = true;

      promise
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }

          return response.json();
        })
        .then((json) => {
          if (isOk) {
            navigate("/register-success");
          } else {
            if (json?.email?.includes("user with this Email already exists.")) {
              setError("Пользователь с таким email уже существует");
              return;
            }

            if (
              json?.username?.includes(
                "A user with that username already exists."
              )
            ) {
              setError("Пользователь с таким username уже существует");
              return;
            }

            if (
              json?.password?.includes(
                "This password is too short. It must contain at least 8 characters."
              )
            ) {
              setError(
                "Этот пароль слишком короткий. Он должен содержать не менее 8 символов"
              );
              return;
            }

            if (json?.password?.includes("This password is too common.")) {
              setError("Этот пароль слишком распространен");
              return;
            }

            if (
              json?.password?.includes("This password is entirely numeric.")
            ) {
              setError("Этот пароль полностью числовой");
              return;
            }
          }
        });
    }
  };

  return (
    <div className={style.form}>
      <Input
        value={user}
        placeholder="User Name"
        onChange={handleUser}
        onBlur={handleUserlBlur}
        onFocus={handleUserlFocus}
        error={userError}
      />
      <Input
        value={email}
        placeholder="Email"
        onChange={handleEmail}
        onBlur={handleEmailBlur}
        onFocus={handleEmailFocus}
        error={emailError}
      />
      <Input
        value={password}
        placeholder="Password"
        onChange={handlePassword}
        onBlur={handlePasswordlBlur}
        onFocus={handlePasswordlFocus}
        error={passwordError}
      />
      <Input
        value={confirm}
        placeholder="Confirm Password"
        onChange={handleConfirm}
        onBlur={handleConfirmlBlur}
        onFocus={handleConfirmlFocus}
        error={confirmError}
      />
      <p className={style.textErrorUnderForm}>{error}</p>
      <div className={style.formBtn}>
        <Button text="Registration" onClick={onClickLogin} type={"primary"} />
      </div>
    </div>
  );
};
