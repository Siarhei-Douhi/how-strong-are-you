import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Title } from "../../components/Title";
import { UsersRaitingTabs } from "../../components/UsersRaitingTabs";

export const RaitingUsers = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text="Рейтинг пользователей" />
      </Header>
      <div className={style.wrapper}>
        <UsersRaitingTabs />
      </div>
    </Container>
  );
};
