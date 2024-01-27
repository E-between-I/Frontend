import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { WritePage } from "../pages/WritePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<WritePage />} path="/write" />
    </Routes>
  );
};

export default MainRouter;
