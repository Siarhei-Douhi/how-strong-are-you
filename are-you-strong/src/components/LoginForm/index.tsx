import { useContext, useState, ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../api/auth";
import { Context } from "../../App";
import { Button } from "../Button";
import { Input } from "../Input";
import { validateEmail, validatePassword } from "../../utils/validation";
import style from "./style.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { isDark, setUser } = useContext(Context);

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setEmailError(error);
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handlePasswordlBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handlePasswordlFocus = () => {
    setPasswordError("");
  };

  const onClickLogin = () => {
    setError("");
    const errors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setEmailError(errors.email);
    setPasswordError(errors.password);

    const isValidForm = Object.values(errors).every((error) => error === "");

    if (isValidForm) {
      let isOk = true;
      login(email, password)
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
            localStorage.setItem("access", json.access);
            localStorage.setItem("refresh", json.refresh);

            getUser()
              .then((response) => {
                return response.json();
              })
              .then((user) => {
                setUser(user);
                navigate("/");
              });
          } else {
            if (
              json?.detail?.includes(
                "No active account found with the given credentials"
              )
            ) {
              setError(
                "Активная учетная запись с указанными учетными данными не найдена"
              );
              return;
            }
          }
        });
    }
  };

  return (
    <div className={style.form}>
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
      <div className={style.formBtn}>
        <Button type="primary" onClick={onClickLogin} text={"Login"} />
      </div>
      <p className={style.textErrorUnderForm}>{error}</p>
      <p className={`${style.text} ${isDark ? style.textDark : ""}`}>
        Forgot your password? <a href="#">Reset password</a>
      </p>
    </div>
  );
};
