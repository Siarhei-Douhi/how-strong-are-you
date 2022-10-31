import { Input } from "../Input";
import { Button } from "../Button";
import { ChangeEventHandler, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
// import userEvent from "@testing-library/user-event";
import { Context } from "../../App";
import { validateNumber, validateCountry } from "../../utils/validation";

export const UserResultForm = () => {
  const { user } = useContext(Context);
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [horisontalBar, setHorisontalBar] = useState("");
  const [horisontalBarError, setHorisontalBarError] = useState("");
  const [bars, setBars] = useState("");
  const [barsError, setBarsError] = useState("");
  const [pushups, setPushups] = useState("");
  const [pushupsError, setPushupsError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAge: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAge(event.target.value);
  };
  const handleWeight: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeight(event.target.value);
  };
  const handleCountry: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCountry(event.target.value);
  };
  const handleHorisontalBar: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHorisontalBar(event.target.value);
  };
  const handleBars: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBars(event.target.value);
  };
  const handlePushups: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPushups(event.target.value);
  };

  const handleAgeBlur = () => {
    const error = validateNumber(age);
    setAgeError(error);
  };
  const handleAgelFocus = () => {
    setAgeError("");
    setError("");
  };

  const handleWeightBlur = () => {
    const error = validateNumber(weight);
    setWeightError(error);
  };
  const handleWeightFocus = () => {
    setWeightError("");
    setError("");
  };

  const handleCountryBlur = () => {
    const error = validateCountry(country);
    setCountryError(error);
  };
  const handleCountryFocus = () => {
    setCountryError("");
    setError("");
  };

  const handleHorisontalBarBlur = () => {
    const error = validateNumber(horisontalBar);
    setHorisontalBarError(error);
  };
  const handleHorisontalBarFocus = () => {
    setHorisontalBarError("");
    setError("");
  };

  const handleBarsBlur = () => {
    const error = validateNumber(bars);
    setBarsError(error);
  };
  const handleBarsFocus = () => {
    setBarsError("");
    setError("");
  };

  const handlePushupsBlur = () => {
    const error = validateNumber(pushups);
    setPushupsError(error);
  };
  const handlePushupsFocus = () => {
    setPushupsError("");
    setError("");
  };

  const goRaiting = () => {
    setError("");
    const errors = {
      age: validateNumber(age),
      weight: validateNumber(weight),
      country: validateCountry(country),
      horisontalBar: validateNumber(horisontalBar),
      bars: validateNumber(bars),
      pushup: validateNumber(pushups),
    };

    setAgeError(errors.age);
    setWeightError(errors.weight);
    setCountryError(errors.country);
    setHorisontalBarError(errors.horisontalBar);
    setBarsError(errors.bars);
    setPushupsError(errors.pushup);

    const isValidForm = Object.values(errors).every((error) => error === "");
    if (isValidForm) {
      const userData = {
        name: user?.username,
        id: String(user?.id),
        age: +age,
        weight: +weight,
        country: country,
        horisontalBar: +horisontalBar,
        bars: +bars,
        pushup: +pushups,
      };

      localStorage.setItem(`userData${user?.id}`, JSON.stringify(userData));
      navigate("/raiting-users");
    } else {
      setError("Ошибка, проверьте данные формы");
    }
  };

  return (
    <div className={style.form}>
      <Input
        value={age}
        placeholder="Возраст"
        onChange={handleAge}
        onBlur={handleAgeBlur}
        onFocus={handleAgelFocus}
        error={ageError}
      />
      <Input
        value={weight}
        placeholder="Вес"
        onChange={handleWeight}
        onBlur={handleWeightBlur}
        onFocus={handleWeightFocus}
        error={weightError}
      />
      <Input
        value={country}
        placeholder="Страна"
        onChange={handleCountry}
        onBlur={handleCountryBlur}
        onFocus={handleCountryFocus}
        error={countryError}
      />
      <Input
        value={horisontalBar}
        placeholder="Турник"
        onChange={handleHorisontalBar}
        onBlur={handleHorisontalBarBlur}
        onFocus={handleHorisontalBarFocus}
        error={horisontalBarError}
      />
      <Input
        value={bars}
        placeholder="Брусья"
        onChange={handleBars}
        onBlur={handleBarsBlur}
        onFocus={handleBarsFocus}
        error={barsError}
      />
      <Input
        value={pushups}
        placeholder="Отжимания"
        onChange={handlePushups}
        onBlur={handlePushupsBlur}
        onFocus={handlePushupsFocus}
        error={pushupsError}
      />
      <p className={style.textErrorUnderForm}>{error}</p>
      <div className={style.formBtn}>
        <Button text="Go raiting" onClick={goRaiting} type={"primary"} />
      </div>
    </div>
  );
};
