import { useEffect, useState, useContext } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { RaitingTableList } from "../RaitingTableList";
import style from "./style.module.css";
import { Context } from "../../App";

type SortTabs = "all" | "weight" | "age";

interface IProps {
  array: IUser[];
  maxResult: TRainings;
}

export const SortUsers = (props: IProps) => {
  const [selectedTab, setSelectedTab] = useState<SortTabs>("all");
  const { user } = useContext(Context);

  // позже заменить данные user на данные зарегестрированного пользователя
  // пока используется хардкод user:
  // const user = { age: 30, weight: 65 };
  const data = localStorage.getItem(`userData${user?.id}`);
  let userData: IUser;
  if (data !== null) {
    userData = JSON.parse(data);
  }

  const getSortArray = (paramSort: "weight" | "age") => {
    const newArray = props.array.filter(
      (item) => userData[paramSort] === item[paramSort]
    );
    return newArray;
  };

  const getSortTabList = (tab: SortTabs) => {
    if (tab === "age") {
      return (
        <RaitingTableList
          array={getSortArray(tab)}
          maxResult={props.maxResult}
        />
      );
    }

    if (tab === "weight") {
      return (
        <RaitingTableList
          array={getSortArray(tab)}
          maxResult={props.maxResult}
        />
      );
    }

    return <RaitingTableList array={props.array} maxResult={props.maxResult} />;
  };

  return (
    <>
      <div className={style.buttonsSortUsers}>
        <Button
          type={selectedTab === "all" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("all");
          }}
          text="Все пользователи"
        />
        <Button
          type={selectedTab === "age" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("age");
          }}
          text="Такого же возраста"
        />
        <Button
          type={selectedTab === "weight" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("weight");
          }}
          text="Такого же веса"
        />
      </div>
      {getSortTabList(selectedTab)}
    </>
  );
};
