import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  );
};

export default MainRouter;
