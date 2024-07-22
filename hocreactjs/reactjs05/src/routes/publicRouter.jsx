import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
export const publicRouter = (
  <>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/san-pham">
        <Route element={<Products />} index />
        <Route path=":path" element={<ProductDetail />} />
        <Route path="ban-chay">
          <Route index element={<h1>Sản phẩm bán chạy</h1>} />
          <Route
            path="theo-thang"
            element={<h1>Sản phẩm bán chạy theo tháng</h1>}
          />
          <Route
            path="theo-nam"
            element={<h1>Sản phẩm bán chạy theo năm</h1>}
          />
        </Route>
      </Route>
    </Route>
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
    </Route>
  </>
);
