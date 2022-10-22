import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { TrainingLevelList } from "../../components/TrainingLevelList";
import { levelsHorisontBar } from "../../workoutData/levelsHorisontBar";
import { Title } from "../../components/Title";

export const HorizontalBar = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={"Турник. Выберите уровень"} />
      </Header>
      <div className={style.levelListWrapper}>
        <TrainingLevelList
          levels={levelsHorisontBar}
          trainingType="Подтягиваетесь"
        />
      </div>
    </Container>
  );
};
