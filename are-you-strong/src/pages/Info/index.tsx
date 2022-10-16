import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export const Info = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header
        children={
          <>
            <Button text="<" type="array" onClick={navigateBack} />
            <h1 className={style.title}>Информация о приложении</h1>
          </>
        }
      />
      <div className={style.wrapper}>
        <h2>Как тренироваться</h2>
        <ol>
          <li>
            Выбирите одну из программ тренировок:
            <ul>
              <li>Турник</li>
              <li>Брусья</li>
              <li>Отжимания</li>
            </ul>
          </li>
          <li>
            Выполните максимальное количество повторений в одном подходе
            выбранного упражнения
          </li>
          <li>Исходя из полученного результата выбирите свой уровень</li>
          <li>Выполняйте выбранный уровень</li>
          <li>
            После завершения уровня снова проверьте свое максимальное количество
            повторений
          </li>
          <li>Выбирите соответствующий уровень тренировок</li>
        </ol>
        <h2>Как отдыхать</h2>
        <p>Отдых между уровнями составляет 2 дня.</p>
        <p>Отдых между подходами составляет 2 минуты.</p>
      </div>
    </Container>
  );
};
