import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

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
    <Container>
      <Header
        children={
          <>
            <Button text="<" type="array" onClick={navigateBack} />
            <h1 className={style.title}>Программы тренировок</h1>
          </>
        }
      />
      <div className={style.wrapper}>
        <Button text="Турник" type="primary" onClick={navigateHorizontalBar} />
        <Button text="Брусья" type="primary" onClick={navigateBars} />
        <Button text="Отжимания" type="primary" onClick={navigatePushup} />
      </div>
    </Container>
  );
};
