import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/Home/index";
import { LoginPage } from "../pages/Login/index";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import SignUp from "../pages/Sign-up";
import Sell from "../pages/Sell/Sell";

function AppRoutes() {

  // ? Las líneas de abajo te servirán para proteger ciertas rutas (como la opción de venta) de usuarios no logeados. Basta con encapsular el elemento en los tags <RequireAuth>

   const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
   return currentUser ? children : <Navigate to="/login" />
    };

    console.log(currentUser)


    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/sell" element={<Sell />} />
            </Route>
        </Routes>
    )
  }

  export {AppRoutes}