import style from "./style.module.css";
import { uniqueId } from "../../utils/uniqueId";

interface IProp {
  array: (string | undefined)[];
}

export const LevelProgram = (props: IProp) => {
  let all = 0;
  return (
    <div className={style.wrapper}>
      {props.array
        ? props.array.map((item, index) => {
            if (item) {
              all = item.split(" ").reduce((a, b) => +a + +b, 0);
            }

            return (
              <div className={style.container} key={uniqueId()}>
                <div className={style.wrapperInfo}>
                  <h3>День {index + 1}</h3>
                  <h3>Всего: {all}</h3>
                </div>
                <div className={style.text}>{item}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};
