import style from "./style.module.css";
import { getUniqueId } from "../../helpers";
import { CountList } from "../CountList";

interface IProp {
  array: (string | undefined)[];
  key?: string;
}
const getDataProgress = (key: string) => {
  const data = localStorage.getItem(key);
  let dataProgress;
  if (data !== null) {
    dataProgress = JSON.parse(data);
  }
  return dataProgress;
};

export const LevelProgram = (props: IProp) => {
  let data = props.key ? getDataProgress(props.key) : "";
  // let arrCountList = [""];
  // let all = 0;
  return (
    <div className={style.wrapper}>
      {props.array
        ? props.array.map((item, index) => {
            if (item && !data && index == 0) {
              // arrCountList = item.split(" ");
              // all = arrCountList.reduce((a, b) => +a + +b, 0);
              return <CountList array={item} day={index + 1} active={index} />;
            }

            return (
              // <div className={style.container} key={getUniqueId()}>
              //   <div className={style.wrapperInfo}>
              //     <h3>День {index + 1}</h3>
              //     <h3>Всего: {all}</h3>
              //   </div>
              //   {item? <CountList array={item} day={index + 1}/>: null}
              // </div>
              <>
                {item ? (
                  <CountList array={item} day={index + 1} active={undefined} />
                ) : null}
              </>
            );
          })
        : null}
    </div>
  );
};
