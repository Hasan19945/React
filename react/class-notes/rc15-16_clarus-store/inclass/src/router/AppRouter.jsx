import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScroolToTop";
import ProductDetailId from "../pages/ProductDetailId";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="products/:title" element={<ProductDetail />} />
          <Route path="products/:title/:id" element={<ProductDetailId />} />
          {/*bu sayfa için productcard compnentindeki yorumda olan yapıyı açınız*/}
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
