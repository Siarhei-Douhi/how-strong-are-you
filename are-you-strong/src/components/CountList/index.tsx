import { isPropertySignature } from "typescript";
import style from "./style.module.css";

interface IProp {
  array: string;
  active?: number;
  day: number;
}

export const CountList = (props: IProp) => {
  let arrCountList = props.array.split(" ");
  let all = arrCountList.reduce((a, b) => +a + +b, 0);
  return (
    <div className={style.container}>
      <div className={style.wrapperInfo}>
        <h3>День {props.day}</h3>
        <h3>Всего: {all}</h3>
      </div>
      <ul className={style.list}>
        {arrCountList.map((item, index) => {
          if (index == props.active) {
            return <li className={style.countActive}>{item}</li>;
          }
          return <li className={style.count}>{item}</li>;
        })}
      </ul>
    </div>

    // <ul className={style.list}>
    //   {props.array.map((item, index) => {
    //     if (index == props.active) {
    //       return <li className={style.countActive}>{item}</li>;
    //     }
    //     return <li className={style.count}>{item}</li>;
    //   })}
    // </ul>
  );
};
