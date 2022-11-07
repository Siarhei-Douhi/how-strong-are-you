import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

export const Error = () => {
  const { isDark } = useContext(Context);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
      </Header>
      <div className={`${style.wrap} ${isDark ? style.wrapDark : ""}`}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </Container>
  );
};
