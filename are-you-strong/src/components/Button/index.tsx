import style from "./style.module.css";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  type: "primary" | "array";
  btnType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const getButtonStyle = (type: "primary" | "array") => {
  if (type === "primary") {
    return style.primary;
  }

  if (type === "array") {
    return style.array;
  }
};
export const Button = (props: Props) => {
  return (
    <button
      className={`${style.button} ${getButtonStyle(props.type)} ${
        props.className
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.btnType}
    >
      {props.text}
    </button>
  );
};
