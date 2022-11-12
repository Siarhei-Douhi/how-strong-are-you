import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { LevelProgram } from "../../components/LevelProgram";
import { Title } from "../../components/Title";
// import { TrainingGifInfo } from "../../components/TrainingGifInfo";
import { getGifById, getLevelData, getKeyById } from "./helpers";
import style from "./style.module.css";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../App";

export const SelectedLevel = () => {
  const { user } = useContext(Context);
  // const [keyLocalStorage, setKeyLocalStorage] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  // позже заменить
  const getDataProgress = (key: string) => {
    const data = localStorage.getItem(key);
    let dataProgress;
    if (data !== null) {
      dataProgress = JSON.parse(data);
    }
    return dataProgress;
  };
  let keyLocalStorage = params.id ? `${getKeyById(+params.id)}${user?.id}` : "";
  // useEffect(() => {
  //   setKeyLocalStorage(params.id ? `${getKeyById(+params.id)}${user?.id}` : "");
  // }, []);

  const dataProgress = getDataProgress(keyLocalStorage);

  let textButton = dataProgress ? "продолжить тренировку" : "начать тренировку";

  // const newGif = params.id ? getGifById(+params.id) : "";

  // trainingProgressLocalStorage = {
  //   level: string;
  //   day:number;
  //  id: string;

  // }

  const level = params.id ? getLevelData(+params.id)?.level : 0;
  const arrayLevelId = params.id
    ? getLevelData(+params.id)?.arrayLevelId
    : [""];

  const newDataProgress = {
    level: level,
    day: 0,
    id: params.id,
  };

  const onClickStart = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (!dataProgress) {
        localStorage.setItem(keyLocalStorage, JSON.stringify(newDataProgress));
      }

      navigate(`/user-training/${dataProgress ? dataProgress.id : params.id}`);
    }
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text={`Уровень ${level}`} />
      </Header>
      {arrayLevelId ? (
        <LevelProgram array={arrayLevelId} id={params.id ? params.id : ""} />
      ) : null}
      <Button text={textButton} type="primary1" onClick={onClickStart} />
    </Container>
  );
};
