import { useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  img: string;
}

export const TrainingGifInfo = (props: IProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onClickButton = () => {
    let a = !visibility;
    setVisibility(a);
  };
  return (
    <div className={style.wrap}>
      <div className={`${visibility ? style.visibleOn : style.visibleOff}`}>
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
