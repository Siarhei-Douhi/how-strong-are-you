import { useEffect, useState, ReactNode, useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

export const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { isDark } = useContext(Context);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={`${style.clock} ${isDark ? style.clockDark : ""}`}>
      {time}
    </div>
  );
};
