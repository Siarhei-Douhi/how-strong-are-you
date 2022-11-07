import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Title } from "../../components/Title";

export const TraningPrograms = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateHorizontalBar = () => {
    navigate("/horizontal-bar");
  };
  const navigateBars = () => {
    navigate("/bars");
  };
  const navigatePushup = () => {
    navigate("/pushup");
  };

  return (
    <Container className={style.backgroundContainer}>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text="Программы тренировок" />
      </Header>
      <div className={style.wrapper}>
        <Button text="Турник" type="primary" onClick={navigateHorizontalBar} />
        <Button text="Брусья" type="primary" onClick={navigateBars} />
        <Button text="Отжимания" type="primary" onClick={navigatePushup} />
      </div>
    </Container>
  );
};
