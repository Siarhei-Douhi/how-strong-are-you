import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";
import { LevelProgram } from "../../components/LevelProgram";
import { levelsHorisontBar } from "../../workoutData/levelsHorisontBar";
import { levelsBars } from "../../workoutData/levelsBars";
import { levelsPushup } from "../../workoutData/levelsPushup";
import { ILevel } from "../../types/levels";
import { Title } from "../../components/Title";

export const SelectedLevel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  let level = 0;
  let arrayLevelId: string[] = [""];

  const getArrayLevel = (array: ILevel[]) => {
    array.map((item) => {
      if (params.id === item.id) {
        level = item.numberLevel;
        arrayLevelId = item.programLevel;
        return item.programLevel;
      }
    });
  };
  if (params.id) {
    if (+params.id < 12) {
      getArrayLevel(levelsHorisontBar);
    } else if (+params.id > 11 && +params.id < 32) {
      getArrayLevel(levelsBars);
    } else if (+params.id > 31) {
      getArrayLevel(levelsPushup);
    }
  }

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={`Уровень ${level}`} />
      </Header>
      <div>
        {arrayLevelId[0] ? <LevelProgram array={arrayLevelId} /> : null}
      </div>
    </Container>
  );
};
