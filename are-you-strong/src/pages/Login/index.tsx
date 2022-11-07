import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import { Button } from "../../components/Button";
import style from "./style.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container type="white">
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
      </Header>
      <div className={style.wrapperLink}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? style.active_link : style.noActive_link
          }
        >
          Login
        </NavLink>{" "}
        |{" "}
        <NavLink
          to={"/registration"}
          className={({ isActive }) =>
            isActive ? style.active_link : style.noActive_link
          }
        >
          Registration
        </NavLink>
      </div>
      <LoginForm />
    </Container>
  );
};
