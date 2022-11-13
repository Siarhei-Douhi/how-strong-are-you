import { Input } from "../Input";
import { Button } from "../Button";
import { ChangeEventHandler, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Context } from "../../App";
import { validateNumber, validateCountry } from "../../utils/validation";
import { getUserData } from "../../helpers";

export const UserResultForm = () => {
  const { user } = useContext(Context);
  const userDataLocStor = getUserData(user?.id);

  const [age, setAge] = useState(userDataLocStor ? userDataLocStor.age : "");
  const [ageError, setAgeError] = useState("");
  const [weight, setWeight] = useState(
    userDataLocStor ? userDataLocStor.weight : ""
  );
  const [weightError, setWeightError] = useState("");
  const [country, setCountry] = useState(
    userDataLocStor ? userDataLocStor.country : ""
  );
  const [countryError, setCountryError] = useState("");
  const [horisontalBar, setHorisontalBar] = useState(
    userDataLocStor ? userDataLocStor.horisontalBar : ""
  );
  const [horisontalBarError, setHorisontalBarError] = useState("");
  const [bars, setBars] = useState(userDataLocStor ? userDataLocStor.bars : "");
  const [barsError, setBarsError] = useState("");
  const [pushups, setPushups] = useState(
    userDataLocStor ? userDataLocStor.pushup : ""
  );
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
        label="Возраст"
        onChange={handleAge}
        onBlur={handleAgeBlur}
        onFocus={handleAgelFocus}
        error={ageError}
      />
      <Input
        value={weight}
        label="Вес"
        onChange={handleWeight}
        onBlur={handleWeightBlur}
        onFocus={handleWeightFocus}
        error={weightError}
      />
      <Input
        value={country}
        label="Страна"
        onChange={handleCountry}
        onBlur={handleCountryBlur}
        onFocus={handleCountryFocus}
        error={countryError}
      />
      <Input
        value={horisontalBar}
        label="Турник"
        onChange={handleHorisontalBar}
        onBlur={handleHorisontalBarBlur}
        onFocus={handleHorisontalBarFocus}
        error={horisontalBarError}
      />
      <Input
        value={bars}
        label="Брусья"
        onChange={handleBars}
        onBlur={handleBarsBlur}
        onFocus={handleBarsFocus}
        error={barsError}
      />
      <Input
        value={pushups}
        label="Отжимания"
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
