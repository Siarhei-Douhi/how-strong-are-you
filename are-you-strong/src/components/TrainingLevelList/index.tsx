import { ILevel } from "../../types/levels";
import { TrainingLevel } from "../TrainingLevel";
import { useNavigate } from "react-router-dom";

interface IProps {
  levels: ILevel[];
  trainingType: string;
}

export const TrainingLevelList = (props: IProps) => {
  const navigate = useNavigate();

  const navigateToSelectedLevel = (levelId: string) => {
    navigate(`/selected-level/${levelId}`);
  };

  return (
    <>
      {props.levels.map((item) => {
        const clickLevel = () => {
          navigateToSelectedLevel(item.id);
        };
        return (
          <div key={item.id} onClick={clickLevel}>
            <TrainingLevel
              id={item.id}
              interval={item.interval}
              numberLevel={item.numberLevel}
              programLevel={item.programLevel}
              trainingType={props.trainingType}
            />
          </div>
        );
      })}
    </>
  );
};
