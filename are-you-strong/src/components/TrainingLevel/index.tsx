import style from "./style.module.css";
import { ILevel } from "../../types/levels";
import { ReactNode, useContext } from "react";
import { Context } from "../../App";

interface Iprops extends ILevel {
  trainingType: string;
}

export const TrainingLevel = (props: Iprops) => {
  const { isDark } = useContext(Context);
  return (
    <div className={`${style.wrapper} ${isDark ? style.wrapperDark : ""}`}>
      <h3>Уровень {props.numberLevel}</h3>
      <p className={style.text}>
        {props.trainingType} {props.interval} раз?
      </p>
    </div>
  );
};
