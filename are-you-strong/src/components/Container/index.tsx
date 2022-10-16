import { ReactNode } from "react";
import style from "./style.module.css";

interface IProps {
  children: ReactNode;
}

export const Container = (props: IProps) => {
  return <div className={style.container}>{props.children}</div>;
};
