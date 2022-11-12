import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { LevelProgram } from "../../components/LevelProgram";
import { Title } from "../../components/Title";
import { getPageById, getLevelData, getKeyById } from "./helpers";
import style from "./style.module.css";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../App";

export const SelectedLevel = () => {
  const { user } = useContext(Context);
  const [disableFinish, setDisableFinish] = useState<boolean>(true);
  const [disableStart, setDisableStart] = useState<boolean>(false);
  const [textStart, setTextStart] = useState<string>("начать тренировку");
  const params = useParams();

  const navigate = useNavigate();
  const navigateBack = () => {
    let url = params.id ? getPageById(+params.id) : "/horizontal-bar";
    navigate(url);
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

  const dataProgress = getDataProgress(keyLocalStorage);

  const level = params.id ? getLevelData(+params.id)?.level : 0;
  const arrayLevelId = params.id
    ? getLevelData(+params.id)?.arrayLevelId
    : [""];

  const newDataProgress = {
    level: level,
    day: 0,
    id: params.id,
  };

  useEffect(() => {
    if (arrayLevelId && dataProgress) {
      setTextStart("продолжить тренировку");

      if (arrayLevelId?.length == dataProgress.day) {
        setTextStart("уровень пройден");
        setDisableStart(true);
      }
      setDisableFinish(false);
    }
  }, []);

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
  const onClickBack = () => {
    if (dataProgress) {
      navigate("/training-programs");
    } else {
      navigate(-1);
    }
  };
  const onClickFinish = () => {
    if (dataProgress) {
      localStorage.removeItem(keyLocalStorage);
    }
    navigateBack();
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={onClickBack} />
        <Title text={`Уровень ${level}`} />
      </Header>
      {arrayLevelId ? (
        <LevelProgram array={arrayLevelId} id={params.id ? params.id : ""} />
      ) : null}
      <div className={style.buttonWrapper}>
        <Button
          text={textStart}
          type="primary1"
          onClick={onClickStart}
          disabled={disableStart}
        />
        <Button
          text={"выбрать уровень"}
          type="primary1"
          onClick={onClickFinish}
          disabled={disableFinish}
        />
      </div>
    </Container>
  );
};
