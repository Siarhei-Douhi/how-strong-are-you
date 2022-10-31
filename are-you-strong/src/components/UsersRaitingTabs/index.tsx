import { useEffect, useState, useContext } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { SortUsers } from "../SortUsers";
import { Context } from "../../App";
import style from "./style.module.css";

const sortUsersOfRaiting = (arr: IUser[], typeArray: TRainings) => {
  arr.sort((a, b) => b[typeArray] - a[typeArray]);
  return arr;
};

export const UsersRaitingTabs = () => {
  const { user } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState<TRainings>("bars");
  const [usersAll, setUsersAll] = useState<IUser[]>([]);

  const data = localStorage.getItem(`userData${user?.id}`);
  let userData: IUser;
  if (data !== null) {
    userData = JSON.parse(data);
  }

  async function getUsers() {
    try {
      const USERS_URL = "http://localhost:3001/users";
      const response = await fetch(USERS_URL);
      const users = await response.json();
      setUsersAll([...users, userData]);
    } catch (err) {
      setUsersAll([userData]);
    }
  }

  useEffect(() => {
    getUsers();
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
