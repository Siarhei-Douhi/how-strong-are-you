import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { TrainingLevelList } from "../../components/TrainingLevelList";
import { levelsPushup } from "../../levelsPushup";

export const Pushup = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header
        children={
          <>
            <Button text="<" type="array" onClick={navigateBack} />
            <h1 className={style.title}>Отжимания. Выберите уровень</h1>
          </>
        }
      />
      <div className={style.levelListWrapper}>
        <TrainingLevelList levels={levelsPushup} trainingType="Отжимаетесь" />
      </div>
    </Container>
  );
};
