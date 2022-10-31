import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import style from "./style.module.css";
import { Menu } from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Time } from "../../components/Time";
import { Context } from "../../App";

export const Main = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const navigateTraningPrograms = () => {
    navigate("/training-programs");
  };
  const navigateInfo = () => {
    navigate("/info");
  };

  const onClickRaiting = () => {
    const data = localStorage.getItem(`userData${user?.id}`);
    if (user) {
      data ? navigate("/raiting-users") : navigate("/data-user");
    } else {
      navigate("/login");
    }
  };
  return (
    <Container>
      <Header>
        <Menu />
        <Time />
      </Header>
      <div className={style.wrapper}>
        <Button text="Рейтинг" type="primary" onClick={onClickRaiting} />
        <Button
          text="Программы тренировок"
          type="primary"
          onClick={navigateTraningPrograms}
        />
        <Button text="Информация" type="primary" onClick={navigateInfo} />
      </div>
    </Container>
  );
};
