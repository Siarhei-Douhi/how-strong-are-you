import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../api/auth";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const Activation = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);

  return (
    <Container type="white">
      <Header />
      <InfoTemplate
        title={"Success"}
        textBtn="Login"
        onClick={() => {
          navigate("/login");
        }}
      >
        Email confirmed. Your registration is now completed
      </InfoTemplate>
    </Container>
  );
};
