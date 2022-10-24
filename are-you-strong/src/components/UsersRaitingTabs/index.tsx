import { useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { SortUsers } from "../SortUsers";
// import { users } from "./mockData";
import style from "./style.module.css";

const sortUsersOfRaiting = (arr: IUser[], typeArray: TRainings) => {
  arr.sort((a, b) => b[typeArray] - a[typeArray]);
  return arr;
};

export const UsersRaitingTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TRainings>("bars");
  const [usersAll, setUsersAll] = useState<IUser[]>([]);

  // для получения пользователей использую json-server
  // установил дополнительную библиотеку, чтобы запускать сразу два localhost(:3000 и :3001)
  // все работает
  async function getUsers() {
    const USERS_URL = "http://localhost:3001/users";
    const response = await fetch(USERS_URL);
    const users = await response.json();
    return users;
  }
  // пока использую "моковые данные" (users)
  // данные user позже заменю на данные залогиненного пользователя
  const user = {
    id: "55555",
    name: "UserMock",
    age: 30,
    weight: 65,
    bars: 40,
    pushup: 50,
    horisontalBar: 10,
    country: "Belarus",
  };

  useEffect(() => {
    getUsers().then((users) => {
      setUsersAll([...users, user]);
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
