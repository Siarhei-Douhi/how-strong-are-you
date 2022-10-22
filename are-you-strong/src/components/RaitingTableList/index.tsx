import { IUser } from "../../types/user";
import { RaitingTableItem } from "../RaitingTableItem";
// import style from "./style.module.css";

//передать сюда уже отсортированный массив
export const RaitingTableList = (
  props: IUser[],
  result: "bars" | "pushup" | "horisontalBar"
) => {
  let maxResult = result;
  return (
    <table>
      <tbody>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Result</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Country</th>
        </tr>
        {props.map((item, index) => {
          return (
            <RaitingTableItem
              position={index + 1}
              id={item.id}
              name={item.name}
              age={item.age}
              weight={item.weight}
              result={item[maxResult]}
              country={item.country}
            />
          );
        })}
      </tbody>
    </table>
  );
};
