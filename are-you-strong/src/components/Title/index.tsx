import style from "./style.module.css";

interface IProps {
  text: string;
}
export const Title = (props: IProps) => {
  return <h1 className={style.title}>{props.text}</h1>;
};
