import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home } from "../pages/Home/index";
import { Login } from "../pages/Login/index";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home />} />
                <Route path="/login" element={<Login/>} />
            </Route>
        </Routes>
    )
  }

  export {AppRoutes}