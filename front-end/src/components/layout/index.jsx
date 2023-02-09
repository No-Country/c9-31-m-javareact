import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/index";
import { SubHeader } from "../sub-header/index";

export function Layout (){
    return <div>
        <Header/>
        <SubHeader/>
        <Outlet/>
    </div>
}