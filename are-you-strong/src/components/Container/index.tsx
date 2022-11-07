import { ReactNode, useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

type BackgroundType = "white" | "black";

const getBackgroundStyle = (type: BackgroundType) => {
  if (type === "white") {
    return style.white;
  }
  if (type === "black") {
    return style.black;
  }
};

interface IProps {
  children: ReactNode;
  className?: string;
  type?: BackgroundType;
}

export const Container = (props: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <div
      className={`${style.container} ${props.className} ${
        props.type ? getBackgroundStyle(props.type) : ""
      } ${isDark ? style.containerDark : ""}`}
    >
      {props.children}
    </div>
  );
};
