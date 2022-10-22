import { useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { TRainings } from "../../types/rainings";
import { Button } from "../Button";
import { SortUsers } from "../SortUsers";
import { users } from "./mockData";
import style from "./style.module.css";

const sortUsersOfRaiting = (arr: IUser[], typeArray: TRainings) => {
  arr.sort((a, b) => b[typeArray] - a[typeArray]);
  return arr;
};

export const UsersRaitingTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TRainings>("bars");

  // для получения пользователей использовать json.server
  // const users = fetch("http://localhost:3000/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     return json;
  //   });
  // console.log(users);

  // пока использую "моковые данные" (users)
  // user заменить на данные залогиненного пользователя
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
  const arrayAllUsers = [...users, user];

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
        array={sortUsersOfRaiting(arrayAllUsers, selectedTab)}
        maxResult={selectedTab}
      />
    </>
  );
};
