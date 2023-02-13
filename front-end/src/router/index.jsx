import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/Home/index";
import { LoginPage } from "../pages/Login/index";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Register from "../pages/Register";
import Sell from "../pages/Sell/Sell";
import ProductsView from "../pages/ProductsView/Index";

function AppRoutes() {

  // ? Las líneas de abajo te servirán para proteger ciertas rutas (como la opción de venta) de usuarios no logeados. Basta con encapsular el elemento en los tags <RequireAuth>

   const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
   return currentUser ? children : <Navigate to="/login" />
    };


    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/productos" element={<ProductsView />} />
            </Route>
        </Routes>
    )
  }

  export {AppRoutes}