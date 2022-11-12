import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { ProgressTraining } from "../../components/ProgressTraining";

export const UserTrainingProgram = () => {
  const params = useParams();
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header>
        <Button text="<" type="array" onClick={navigateBack} />
        {/* <Title text={`Уровень ${level}`} /> */}
      </Header>
      {params.id ? <ProgressTraining id={+params.id} /> : null}
    </Container>
  );
};
