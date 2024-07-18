import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ThankYou from "./pages/ThankYou";
import ProductDetail from "./pages/ProductDetail";
export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h2>Menu</h2>
          <Menu />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/san-pham/:path" element={<ProductDetail />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
