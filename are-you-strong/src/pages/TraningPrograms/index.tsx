import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Title } from "../../components/Title";
import { useContext } from "react";

import { Context } from "../../App";

const getDataProgress = (key: string) => {
  const data = localStorage.getItem(key);
  let dataProgress;
  if (data) {
    dataProgress = JSON.parse(data);
  }
  return dataProgress;
};

export const TraningPrograms = () => {
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const getNavigateUrl = (key: string, url: string) => {
    const keyLocalStorage = `${key}${user?.id}`;
    const dataUserProgress = getDataProgress(keyLocalStorage);
    const id = dataUserProgress ? dataUserProgress.id : "";
    if (id) {
      navigate(`/selected-level/${id}`);
    } else {
      navigate(url);
    }
  };

  const navigateHorizontalBar = () => {
    getNavigateUrl("horisontalBar", "/horizontal-bar");
  };
  const navigateBars = () => {
    getNavigateUrl("bars", "/bars");
    // navigate("/bars");
  };
  const navigatePushup = () => {
    getNavigateUrl("pushup", "/pushup");
    // navigate("/pushup");
  };

  return (
    <Container className={style.backgroundContainer}>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        <Title text="Программы тренировок" />
      </Header>
      <div className={style.wrapper}>
        <Button text="Турник" type="primary" onClick={navigateHorizontalBar} />
        <Button text="Брусья" type="primary" onClick={navigateBars} />
        <Button text="Отжимания" type="primary" onClick={navigatePushup} />
      </div>
    </Container>
  );
};
