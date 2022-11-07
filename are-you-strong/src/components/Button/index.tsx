import style from "./style.module.css";
import { MouseEventHandler } from "react";
import { useContext } from "react";
import { Context } from "../../App";

type ButtonType = "primary" | "array" | "primary2" | "primary1";
interface Props {
  text: string;
  type: ButtonType;
  btnType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: ButtonType) => {
  if (type === "primary") {
    return style.primary;
  }
  if (type === "primary1") {
    return style.primary1;
  }
  if (type === "primary2") {
    return style.primary2;
  }
  if (type === "array") {
    return style.array;
  }
};
export const Button = (props: Props) => {
  const { isDark } = useContext(Context);
  return (
    <button
      className={`${style.button} ${getButtonStyle(props.type)} ${
        props.className
      } ${isDark ? style.buttonDark : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.btnType}
    >
      {props.text}
    </button>
  );
};
