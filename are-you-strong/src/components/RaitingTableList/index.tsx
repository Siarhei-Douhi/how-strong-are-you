import { IUser } from "../../types/user";
import { RaitingTableItem } from "../RaitingTableItem";
import { TRainings } from "../../types/rainings";
import style from "./style.module.css";

interface IProps {
  array: IUser[];
  maxResult: TRainings;
}

export const RaitingTableList = (props: IProps) => {
  return (
    <>
      <div className={style.wrapperTbody}>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Result</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {props.array.map((item, index) => {
              return (
                <RaitingTableItem
                  key={item.id}
                  position={index + 1}
                  id={item.id}
                  name={item.name}
                  age={item.age}
                  weight={item.weight}
                  result={item[props.maxResult]}
                  country={item.country}
                  bars={item.bars}
                  pushup={item.pushup}
                  horisontalBar={item.horisontalBar}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
