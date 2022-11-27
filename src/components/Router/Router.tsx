import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesConstantsRoutes } from "pages/contants";
import { ProductListing } from "pages/ProductListing";
import { Cart } from "pages/Cart";
import { ProductDescription } from "pages/ProductDescription";
import { Login } from "pages/Login";
import { Register } from "pages/Register"


export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesConstantsRoutes.productListing} element={<ProductListing />} />
      <Route path={PagesConstantsRoutes.cart} element={<Cart />} />
      <Route
        path={PagesConstantsRoutes.productDescription}
        element={<ProductDescription />}
      />
      <Route path= {PagesConstantsRoutes.login} element={<Login />} />
      <Route path= {PagesConstantsRoutes.register} element={<Register />} />
    </Routes>
  </BrowserRouter>
);