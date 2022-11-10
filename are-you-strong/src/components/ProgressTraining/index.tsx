import { stringify } from "querystring";
import { Button } from "../Button";

interface IProps {
  key: string;
  array: (string | undefined)[];
}

const getTrainingProgress = (key: string) => {
  const data = localStorage.getItem(key);
  let trainingProgress;
  if (data !== null) {
    trainingProgress = JSON.parse(data);
  }
  return trainingProgress;
};

export const ProgressTraining = (props: IProps) => {
  let trainingProgress = getTrainingProgress(props.key);
  // trainingProgressLocalStorage = {
  //   level: string;
  //   day:number;

  // }
  if (trainingProgress) {
  }
  return (
    <div>
      <h2>Выполните повтрорений</h2>
      <Button type="primary" text="" onClick={() => {}} />
      <ul>
        <li>Выполните подход</li>
        <li>Нажмите на кнопку</li>
        <li>Отдыхайте 2 минуты</li>
      </ul>
    </div>
  );
};
