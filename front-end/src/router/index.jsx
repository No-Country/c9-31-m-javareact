import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/Home/index";
import { LoginPage } from "../pages/Login/index";
import ProductDetail, { Item } from "../pages/Item/index";
//import { useContext } from "react";
//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../context/AuthContext";

import Register from "../pages/Register";
import Sell from "../pages/Sell/Sell";
import ProductsView from "../pages/ProductsView/Index";
import MySells from "../components/my-sells";
import SearchProducts from "../pages/Search-result";
import SellerUserInfo from "../pages/SellerUserInfo";
import { useUser } from "../hooks";

function AppRoutes() {

  // ? Las líneas de abajo te servirán para proteger ciertas rutas (como la opción de venta) de usuarios no logeados. Basta con encapsular el elemento en los tags <RequireAuth>

// ?? estas lineas estan comentadas para que no hagan ruido mientras no las necesitemos
//const { currentUser } = useContext(AuthContext)
//     const RequireAuth = ({ children }) => {
//    return currentUser ? children : <Navigate to="/login" />
//     };
//const user = useUser()
//let user = localStorage.getItem("user");
// if (user != undefined) {
//     user = true
// }
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
                <Route path="/resultados" element={<SearchProducts/>} />
                <Route path="/informacionvendedor" element={<SellerUserInfo/>} />
            </Route>
        </Routes>
    )
  }

  export {AppRoutes}