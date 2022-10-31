import { NavBar } from "../NavBar";
import style from "./style.module.css";

export const Menu = () => {
  return (
    <>
      <input id="check" type="checkbox" className={style.checkMenu} />
      <label htmlFor="check" className={style.burgerMenu}>
        <span className={`${style.burgerLines} ${style.ln1}`}></span>
        <span className={`${style.burgerLines} ${style.ln2}`}></span>
        <span className={`${style.burgerLines} ${style.ln3}`}></span>
        <span className={`${style.burgerLines} ${style.ln4}`}></span>
      </label>
      <nav className={style.navToggle}>
        <NavBar />
      </nav>
    </>
  );
};
