import { useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  img: string;
}

export const TrainingGifInfo = (props: IProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onClickButton = () => {
    setVisibility(!visibility);
  };
  return (
    <div className={style.wrap}>
      <div
        className={`${style.visibleOn} ${visibility ? "" : style.visibleOff}`}
      >
        <img src={props.img} alt="menu" className={style.img} />
      </div>
      <Button
        text="техника выполнения"
        type="primary1"
        onClick={onClickButton}
      />
    </div>
  );
};
