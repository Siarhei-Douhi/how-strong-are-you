import { IUser } from "../../types/user";
interface IProps extends IUser {
  position: number;
  result: number;
}

export const RaitingTableItem = (props: IProps) => {
  return (
    <tr key={props.id}>
      <td>{props.position}</td>
      <td>{props.name}</td>
      <td>{props.result}</td>
      <td>{props.age}</td>
      <td>{props.weight}</td>
      <td>{props.country}</td>
    </tr>
  );
};
