import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import SuspenseWrapper from "../components/SuspenseWrapper";
import Contact from "../pages/Contact";
import ThankYou from "../pages/ThankYou";

export const privateRouter = (
  <Route element={<MainLayout />}>
    <Route element={<AuthMiddleware />}>
      <Route
        path="/gioi-thieu"
        element={<SuspenseWrapper path="../pages/About" />}
      />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Route>
  </Route>
);
