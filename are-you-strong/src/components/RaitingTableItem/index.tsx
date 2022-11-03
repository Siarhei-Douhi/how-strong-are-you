import { IUser } from "../../types/user";
import { getUserData } from "../../helpers";
import { Context } from "../../App";
import { useContext } from "react";
import style from "./style.module.css";

interface IProps extends IUser {
  position: number;
  result: number;
}

export const RaitingTableItem = (props: IProps) => {
  const { user } = useContext(Context);

  const userData = getUserData(user?.id);

  return (
    <tr
      key={props.id}
      className={`${
        userData && user && +props.id === user.id ? style.trUser : ""
      }`}
    >
      <td>{props.position}</td>
      <td>{props.name}</td>
      <td>{props.result}</td>
      <td>{props.age}</td>
      <td>{props.weight}</td>
      <td>{props.country}</td>
    </tr>
  );
};
