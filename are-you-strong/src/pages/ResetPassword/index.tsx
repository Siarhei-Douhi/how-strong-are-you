import { ChangeEventHandler, useState } from "react";
import { resetPassword } from "../../api/auth";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/validation";
import style from "./style.module.css";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setEmailError(error);
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const sendEmail = () => {
    resetPassword(email).then((response) => {
      if (response.ok) {
        NotificationManager.info(
          "Сообщение о смене пороля отправлено вам на почту"
        );

        setEmail("");
      }
    });
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
      </Header>
      <div className={style.wrapper}>
        <h1 className={style.title}> Password change</h1>
        <Input
          value={email}
          placeholder="Email"
          onChange={handleEmail}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          error={emailError}
        />
        <Button text="Send email" onClick={sendEmail} type="primary" />
      </div>
    </Container>
  );
};
