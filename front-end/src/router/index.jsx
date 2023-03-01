import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/Home/index";
import { LoginPage } from "../pages/Login/index";
import ProductDetail from "../pages/Item/index";
import Register from "../pages/Register";
import Sell from "../pages/Sell/Sell";
import ProductsView from "../pages/ProductsView/Index";
import MySells from "../components/my-sells";
import SearchProducts from "../pages/Search-result";
import SellerUserInfo from "../pages/SellerUserInfo";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/sell" element={<Sell/>} />
                <Route path="/misventas" element={<MySells/>} />
                <Route path="/productos" element={<ProductsView />} />
                <Route path="/item/:id" element={<ProductDetail/>} />
                <Route path="/resultados/:query" element={<SearchProducts/>} />
                <Route path="/resultados/" element={<SearchProducts/>} />
                <Route path="/informacionvendedor" element={<SellerUserInfo/>} />
            </Route>
        </Routes>
    )
  }

  export {AppRoutes}