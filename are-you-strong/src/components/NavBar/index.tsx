import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
import style from "./style.module.css";

export const NavBar = () => {
  const { isDark, setIsDark, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleOnChange = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const logout = () => {
    navigate("/");
    setUser(null);

    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
  };

  return (
    <>
      {user ? (
        <div>
          <h2 className={style.userName}>{user?.username}</h2>
          <button className={style.logOut} onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h2 className={style.userName}>No User</h2>
          <ul className={style.links}>
            <li className={style.link}>
              <Link to="/login">Login</Link>
            </li>
            <li className={style.link}>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
      )}
      <div className={style.wrapperToggle}>
        <p className={style.nameTheme}>Темная тема</p>
        <DarkModeToggle inputChecked={isDark} onChange={handleOnChange} />
      </div>
    </>
  );
};
