import styles from "./style.module.css";
import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";

interface Input {
  label?: string;
  value?: string;
  placeholder?: string;
  refObj?: any;
  error?: string;
  name?: string;
  required?: boolean;
  pattern?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const Input = (props: Input) => {
  const { isDark } = useContext(Context);
  return (
    <label>
      {props.label ? (
        <p
          className={`${styles.labelTitle} ${
            isDark ? styles.labelTitleDark : ""
          }`}
        >
          {props.label}
        </p>
      ) : null}
      <input
        className={`${styles.input} ${isDark ? styles.inputDark : ""} ${
          props.error ? styles.error : ""
        }`}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        ref={props.refObj}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required={props.required}
        name={props.name}
        pattern={props.pattern}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
      ></input>
      <p className={styles.textError}>{props.error}</p>
    </label>
  );
};
