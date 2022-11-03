import { useEffect, useState } from "react";
import style from "./style.module.css";

export const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div className={style.clock}>{time}</div>;
};
