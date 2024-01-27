import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import StockPage from "../pages/Stock";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<StockPage />} path="/com" />
    </Routes>
  );
};

export default MainRouter;
