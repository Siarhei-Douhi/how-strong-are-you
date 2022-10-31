import { IUser } from "../../types/user";
import style from "./style.module.css";
interface IProps extends IUser {
  position: number;
  result: number;
}

export const RaitingTableItem = (props: IProps) => {
  const data = localStorage.getItem("userDataLocal");
  let user = { id: "test" };
  if (data !== null) {
    user = JSON.parse(data);
  }

  return (
    <tr
      key={props.id}
      className={`${user && props.id === user.id ? style.trUser : ""}`}
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
