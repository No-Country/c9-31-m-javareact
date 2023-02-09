import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/index";

export function Layout (){
    return <div>
        <Header/>
        <Outlet/>
    </div>
}