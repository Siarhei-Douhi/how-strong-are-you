// import { IUser } from "../../types/user";
interface IProps {
  position: number;
  id?: string;
  name: string;
  age: number;
  weight: number;
  // bars: number;
  // pushup: number;
  // horisontalBar: number;
  result: number;
  country: string;
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
