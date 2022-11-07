import { UserResultForm } from "../../components/UserResultForm";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import style from "./style.module.css";

export const UserData = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container type="white">
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={"Запишите свои данные"} />
      </Header>
      <UserResultForm />
    </Container>
  );
};
