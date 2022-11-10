import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { LevelProgram } from "../../components/LevelProgram";
import { Title } from "../../components/Title";
// import { TrainingGifInfo } from "../../components/TrainingGifInfo";
import { getGifById, getLevelData } from "./helpers";
import style from "./style.module.css";

export const SelectedLevel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  // const newGif = params.id ? getGifById(+params.id) : "";

  const level = params.id ? getLevelData(+params.id)?.level : 0;
  const arrayLevelId = params.id
    ? getLevelData(+params.id)?.arrayLevelId
    : [""];

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={`Уровень ${level}`} />
      </Header>
      {arrayLevelId ? <LevelProgram array={arrayLevelId} /> : null}
      <Button text="начать тренировку" type="primary1" onClick={() => {}} />
    </Container>
  );
};
