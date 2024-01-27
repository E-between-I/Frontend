import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import AnotherLoginPage from "../pages/AnotherLoginPage";
import CreateNickNamePage from "../pages/CreateNickNamePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<AnotherLoginPage />} path="/another_login" />
      <Route element={<CreateNickNamePage />} path="/create_nickname" />
    </Routes>
  );
};

export default MainRouter;
