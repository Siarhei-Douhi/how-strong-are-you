import { useEffect, useState, useContext } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { SortUsers } from "../SortUsers";
import { Context } from "../../App";
import { getUserData } from "../../helpers";
import { getUsers } from "../../api/users";
import style from "./style.module.css";

const sortUsersOfRaiting = (arr: IUser[], typeArray: TRainings) => {
  return arr.sort((a, b) => b[typeArray] - a[typeArray]);
};

export const UsersRaitingTabs = () => {
  const { user } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState<TRainings>("bars");
  const [usersAll, setUsersAll] = useState<IUser[]>([]);

  const userData = getUserData(user?.id);

  useEffect(() => {
    getUsers()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsersAll([...json, userData]);
      })
      .catch(() => {
        setUsersAll([userData]);
      });
  }, []);

  return (
    <>
      <div className={style.buttonsTypesTraining}>
        <Button
          type={selectedTab === "bars" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("bars");
          }}
          text="Брусья"
        />
        <Button
          type={selectedTab === "pushup" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("pushup");
          }}
          text="Отжимания"
        />
        <Button
          type={selectedTab === "horisontalBar" ? "primary2" : "primary1"}
          onClick={() => {
            setSelectedTab("horisontalBar");
          }}
          text="Турник"
        />
      </div>
      <SortUsers
        array={sortUsersOfRaiting(usersAll, selectedTab)}
        maxResult={selectedTab}
      />
    </>
  );
};
