import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import style from "./style.module.css";

export const Error = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header
        children={<Button text="<" type="array" onClick={navigateBack} />}
      />
      <div className={style.wrap}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </Container>
  );
};
