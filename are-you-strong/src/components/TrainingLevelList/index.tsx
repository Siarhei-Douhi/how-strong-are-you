import { ILevel } from "../../types/levels";
import { TrainingLevel } from "../TrainingLevel";
import { useNavigate } from "react-router-dom";
import { uniqueId } from "../../utils/uniqueId";

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
          <div key={uniqueId()} onClick={clickLevel}>
            <TrainingLevel
              id={uniqueId()}
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
