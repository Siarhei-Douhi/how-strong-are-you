import { ReactNode } from "react";
import style from "./style.module.css";

interface IProps {
  children?: ReactNode;
}

export const Header = (props: IProps) => {
  return <div className={style.header}>{props.children}</div>;
};
