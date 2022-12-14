import { useState, useContext, useEffect } from "react";
import { ProgramForDay } from "../ProgramForDay";
import { useNavigate, useParams } from "react-router-dom";
import { getKeyById, getLevelData } from "../../pages/SelectedLevel/helpers";
import { getDataProgress } from "../../helpers";
import style from "./style.module.css";

import { Context } from "../../App";

interface IProps {
  id: number;
}

export const ProgressTraining = (props: IProps) => {
  const { user } = useContext(Context);
  const [active, setActive] = useState(0);
  const [textButton, setTextButton] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const navigateLavelDays = () => {
    navigate(`/selected-level/${params.id}`);
  };

  let keyLocal = getKeyById(props.id);

  const trainingProgress = getDataProgress(`${keyLocal}${user?.id}`);

  const activeDay = trainingProgress.day;
  const level = trainingProgress.level;
  const arrayLevelId = params.id
    ? getLevelData(+params.id)?.arrayLevelId
    : [""];

  const getTextButton = () => {
    const arrayProgramDay = arrayLevelId
      ? arrayLevelId[activeDay].split(" ")
      : [""];
    return arrayProgramDay[active];
  };

  const newTrainingProgress = {
    level: level,
    day: activeDay + 1,
    id: params.id,
  };

  const onClickReady = () => {
    if (
      arrayLevelId &&
      arrayLevelId[activeDay].split(" ").length - 1 == active
    ) {
      localStorage.setItem(
        `${keyLocal}${user?.id}`,
        JSON.stringify(newTrainingProgress)
      );
      navigateLavelDays();
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    setTextButton(getTextButton());
  }, [active]);

  return (
    <div className={style.wrapper}>
      <h2>Уровень {level}</h2>
      {arrayLevelId ? (
        <ProgramForDay
          array={arrayLevelId[activeDay]}
          day={activeDay + 1}
          active={active}
        />
      ) : null}
      <h2>Выполните повтрорений</h2>
      <div onClick={onClickReady} className={style.ready}>
        <p>{textButton}</p>
        <p>готово</p>
      </div>
      <ol className={style.list}>
        <li>Выполните подход</li>
        <li>Нажмите на кнопку</li>
        <li>Отдыхайте 2 минуты</li>
      </ol>
    </div>
  );
};
