import { Route, Routes, Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { Context } from "../App";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";
import { Activation } from "../pages/Activation";
import { ResetPassword } from "../pages/ResetPassword";
import { Error } from "../pages/Error";
import { TraningPrograms } from "../pages/TraningPrograms";
import { Info } from "../pages/Info";
import { HorizontalBar } from "../pages/HorizontalBar";
import { SelectedLevel } from "../pages/SelectedLevel";
import { Bars } from "../pages/Bars";
import { Pushup } from "../pages/Pushup";
import { RaitingUsers } from "../pages/RaitingUsers";
import { ConfirmPassword } from "../pages/ConfirmPassword";
import { UserData } from "../pages/UserData";
import { RegistrationConfirmation } from "../pages/RegistrationSuccess";
import { UserTrainingProgram } from "../pages/UserTrainingProgram";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/register-success" element={<RegistrationConfirmation />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ConfirmPassword />}
      />
      <Route path="/training-programs" element={<TraningPrograms />} />
      <Route path="/horizontal-bar" element={<HorizontalBar />} />
      <Route path="/bars" element={<Bars />} />
      <Route path="/pushup" element={<Pushup />} />
      <Route path="/selected-level/:id" element={<SelectedLevel />} />
      <Route path="/info" element={<Info />} />
      <Route path="/user-training/:id" element={<UserTrainingProgram />} />
      <Route path="/raiting-users" element={useLoginGuard(<RaitingUsers />)} />
      <Route path="/data-user" element={useLoginGuard(<UserData />)} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

const useLoginGuard = (component: ReactNode) => {
  const { user } = useContext(Context);

  if (user) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};
