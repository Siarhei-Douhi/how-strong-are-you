import style from "./style.module.css";
import { getUniqueId } from "../../helpers";

interface IProp {
  array: string;
  active?: number;
  day: number;
}

export const ProgramForDay = (props: IProp) => {
  let arrCountList = props.array.split(" ");
  let all = arrCountList.reduce((a, b) => +a + +b, 0);

  return (
    <div className={style.container} key={getUniqueId()}>
      <div className={style.wrapperInfo}>
        <h3 className={`${props.active !== undefined ? style.dayActive : ""}`}>
          День {props.day}
        </h3>
        <h3>Всего: {all}</h3>
      </div>
      <ul className={style.list}>
        {arrCountList.map((item, index) => {
          if (index == props.active) {
            return (
              <li className={style.countActive} key={index}>
                {item}
              </li>
            );
          }
          return (
            <li className={style.count} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
