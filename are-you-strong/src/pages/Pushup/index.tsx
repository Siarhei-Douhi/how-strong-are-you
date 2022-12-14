import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { TrainingLevelList } from "../../components/TrainingLevelList";
import { levelsPushup } from "../../workoutData/levelsPushup";
import { Title } from "../../components/Title";
import { pushupGif } from "../../assets";
import { TrainingGifInfo } from "../../components/TrainingGifInfo";

export const Pushup = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/training-programs");
  };
  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={"Отжимания. Выберите уровень"} />
      </Header>
      <div className={style.levelListWrapper}>
        <TrainingLevelList levels={levelsPushup} trainingType="Отжимаетесь" />
      </div>
      <TrainingGifInfo img={pushupGif} />
    </Container>
  );
};
