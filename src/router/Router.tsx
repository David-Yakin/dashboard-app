import { Route, Routes } from "react-router-dom";
import ROUTES from "./models/routes";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<DashboardPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
