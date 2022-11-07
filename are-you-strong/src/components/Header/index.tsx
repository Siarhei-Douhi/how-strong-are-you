import { ReactNode, useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

interface IProps {
  children?: ReactNode;
}

export const Header = (props: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <div className={`${style.header} ${isDark ? style.headerDark : ""}`}>
      {props.children}
    </div>
  );
};
