import { useState, ChangeEventHandler } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPassword } from "../../api/auth";
import { validatePassword } from "../../utils/validation";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NotificationManager } from "react-notifications";
import style from "./style.module.css";

export const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const navigate = useNavigate();

  const handleConfirmPassword = () => {
    if (uid && token && password) {
      confirmPassword(uid, token, password).then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          NotificationManager.error("Что-то пошло не так");
        }
      });
    }
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordlBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handlePasswordlFocus = () => {
    setPasswordError("");
  };

  return (
    <Container type="white">
      <Header />
      <div className={style.wrapper}>
        <h1 className={style.title}> Enter a new password</h1>
        <Input
          value={password}
          placeholder="Password"
          onChange={handlePassword}
          onBlur={handlePasswordlBlur}
          onFocus={handlePasswordlFocus}
          error={passwordError}
        />
        <Button
          type="primary"
          onClick={handleConfirmPassword}
          text={"Confirm password"}
        />
      </div>
    </Container>
  );
};
