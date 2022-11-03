import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegistrationConfirmation = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
      </Header>
      <InfoTemplate
        title="Registration confirmation"
        textBtn="Home"
        onClick={navigateToHome}
      >
        Please activate your account with the activation link in the email{" "}
        <a href="#">user@gmail.com</a> Please, check your email
      </InfoTemplate>
    </Container>
  );
};
