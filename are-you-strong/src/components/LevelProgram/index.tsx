import style from "./style.module.css";

import { CountList } from "../CountList";
import { getKeyById } from "../../pages/SelectedLevel/helpers";
import { useContext } from "react";

import { Context } from "../../App";

interface IProp {
  array: (string | undefined)[];
  id: string;
}

const getDataProgress = (key: string) => {
  const data = localStorage.getItem(key);
  let dataProgress;
  if (data) {
    dataProgress = JSON.parse(data);
  }
  return dataProgress;
};

export const LevelProgram = (props: IProp) => {
  const { user } = useContext(Context);

  let keyLocStor = `${getKeyById(+props.id)}${user?.id}`;

  const data = keyLocStor ? getDataProgress(keyLocStor) : "";

  return (
    <div className={style.wrapper}>
      {props.array
        ? props.array.map((item, index) => {
            if (item && !data && index === 0) {
              return <CountList array={item} day={index + 1} active={index} />;
            } else if (item && data && index === data.day) {
              return <CountList array={item} day={index + 1} active={0} />;
            }

            return (
              <>{item ? <CountList array={item} day={index + 1} /> : null}</>
            );
          })
        : null}
    </div>
  );
};
