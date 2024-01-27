import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { WritePage } from "../pages/WritePage";
import LoginPage from "../pages/LoginPage";
import AnotherLoginPage from "../pages/AnotherLoginPage";
import CreateNickNamePage from "../pages/CreateNickNamePage";
import { LecturePage } from "../pages/LecturePage";
import StockPage from "../pages/StockPage";
import ImmovablesPage from "../pages/Immovables";
import SavingsPage from "../pages/SavingsPage";
import EconomyPage from "../pages/EconomyPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<WritePage />} path="/write/:type" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<AnotherLoginPage />} path="/another_login" />
      <Route element={<CreateNickNamePage />} path="/create_nickname" />
      <Route element={<LecturePage />} path="/lecture" />
      <Route element={<StockPage />} path="/stock" />
      <Route element={<ImmovablesPage />} path="/immovables" />
      <Route element={<SavingsPage />} path="/savings" />
      <Route element={<EconomyPage />} path="/economy" />
    </Routes>
  );
};

export default MainRouter;
