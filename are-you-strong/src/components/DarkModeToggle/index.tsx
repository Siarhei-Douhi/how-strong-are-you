import style from "./style.module.css";

interface IProps {
  inputChecked: boolean;
  onChange: () => void;
}

export const DarkModeToggle = ({ inputChecked, onChange }: IProps) => {
  return (
    <div className={style.toggleWrapper}>
      <input
        type="checkbox"
        className={style.checkbox}
        id="checkbox"
        onChange={onChange}
        checked={inputChecked}
      />
      <label htmlFor="checkbox" className={style.label}>
        <span className={style.on}>ON</span>
        <span className={style.off}>OFF</span>
        <div className={style.ball}></div>
      </label>
    </div>
  );
};
