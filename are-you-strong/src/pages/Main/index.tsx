import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import style from "./style.module.css";
import { Menu } from "../../components/Menu";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const navigateTraningPrograms = () => {
    navigate("/training-programs");
  };
  const navigateInfo = () => {
    navigate("/info");
  };

  return (
    <Container>
      <Header>
        <Menu />
      </Header>
      <div className={style.wrapper}>
        <Button text="Рейтинг" type="primary" onClick={() => {}} />
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
