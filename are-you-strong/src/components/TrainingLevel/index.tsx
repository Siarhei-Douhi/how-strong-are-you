import style from "./style.module.css";
import { ILevel } from "../../types/levels";

interface Iprops extends ILevel {
  trainingType: string;
}

export const TrainingLevel = (props: Iprops) => {
  return (
    <div className={style.wrapper}>
      <h3>Уровень {props.numberLevel}</h3>
      <p className={style.text}>
        {props.trainingType} {props.interval} раз?
      </p>
    </div>
  );
};
