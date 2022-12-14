import { useState, useContext } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { RaitingTableList } from "../RaitingTableList";
import style from "./style.module.css";
import { Context } from "../../App";
import { getUserData } from "../../helpers";

type SortTabs = "all" | "weight" | "age";

interface IProps {
  array: IUser[];
  maxResult: TRainings;
}

export const SortUsers = (props: IProps) => {
  const [selectedTab, setSelectedTab] = useState<SortTabs>("all");
  const { user } = useContext(Context);

  const userData = getUserData(user?.id);

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
