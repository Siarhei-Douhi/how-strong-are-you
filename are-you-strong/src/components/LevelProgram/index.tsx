import style from "./style.module.css";
import { CountList } from "../CountList";
import { getKeyById } from "../../pages/SelectedLevel/helpers";
import { useContext } from "react";
import { Context } from "../../App";
import { getUniqueId } from "../../helpers";
import { getDataProgress } from "../../helpers";

interface IProp {
  array: (string | undefined)[];
  id: string;
}

export const LevelProgram = (props: IProp) => {
  const { user } = useContext(Context);

  const keyLocStor = `${getKeyById(+props.id)}${user?.id}`;

  const data = keyLocStor ? getDataProgress(keyLocStor) : "";

  return (
    <div className={style.wrapper} key={getUniqueId()}>
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
