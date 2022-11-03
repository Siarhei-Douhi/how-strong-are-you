import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { RegistrationForm } from "../../components/RegistrationForm";
import { Button } from "../../components/Button";
import styles from "./style.module.css";

export const Registration = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
      </Header>
      <div className={styles.wrapperLink}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.noActive_link
          }
        >
          Login
        </NavLink>{" "}
        |{" "}
        <NavLink
          to={"/registration"}
          className={({ isActive }) =>
            isActive ? styles.active_link : styles.noActive_link
          }
        >
          Registration
        </NavLink>
      </div>
      <RegistrationForm />
    </Container>
  );
};
