import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";
import { LevelProgram } from "../../components/LevelProgram";
import { levelsHorisontBar } from "../../levelsHorisontBar";
import { levelsBars } from "../../levelsBars";
import { levelsPushup } from "../../levelsPushup";

export const SelectedLevel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  let level = 0;
  let arrayLevelId: any;
  let arrayLevel = levelsHorisontBar.map((item) => {
    if (params.id === item.id) {
      level = item.numberLevel;
      arrayLevelId = item.programLevel;
      return item.programLevel;
    }
  });
  if (!arrayLevel[0]) {
    arrayLevel = levelsBars.map((item) => {
      if (params.id === item.id) {
        level = item.numberLevel;
        arrayLevelId = item.programLevel;
        return item.programLevel;
      }
    });
  }
  if (!arrayLevel[0]) {
    arrayLevel = levelsPushup.map((item) => {
      if (params.id === item.id) {
        level = item.numberLevel;
        arrayLevelId = item.programLevel;
        return item.programLevel;
      }
    });
  }

  return (
    <Container>
      <Header
        children={
          <>
            <Button text="<" type="array" onClick={navigateBack} />
            <h1 className={style.title}>Уровень {level}</h1>
          </>
        }
      />
      <div>{arrayLevel ? <LevelProgram array={arrayLevelId} /> : null}</div>
    </Container>
  );
};
