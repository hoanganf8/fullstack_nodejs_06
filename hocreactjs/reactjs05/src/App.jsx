import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./routes/publicRouter";
import { privateRouter } from "./routes/privateRouter";
import Error from "./pages/Error";
export default function App() {
  return (
    <Routes>
      {publicRouter}
      {privateRouter}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
