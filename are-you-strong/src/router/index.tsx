import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { Error } from "../pages/Error";
import { TraningPrograms } from "../pages/TraningPrograms";
import { Info } from "../pages/Info";
import { HorizontalBar } from "../pages/HorizontalBar";
import { SelectedLevel } from "../pages/SelectedLevel";
import { Bars } from "../pages/Bars";
import { Pushup } from "../pages/Pushup";
import { RaitingUsers } from "../pages/RaitingUsers";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/registration" />
      <Route path="/login" />
      <Route path="/training-programs" element={<TraningPrograms />} />
      <Route path="/horizontal-bar" element={<HorizontalBar />} />
      <Route path="/bars" element={<Bars />} />
      <Route path="/pushup" element={<Pushup />} />
      <Route path="/selected-level/:id" element={<SelectedLevel />} />
      <Route path="/info" element={<Info />} />
      <Route path="/raiting-users" element={<RaitingUsers />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
