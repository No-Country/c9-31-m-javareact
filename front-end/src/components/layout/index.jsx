import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/index";
import Header from "../header/index";
import { SubHeader } from "../sub-header/index";

export function Layout (){
    return <div>
        <Header/>
        <SubHeader/>
        <Outlet/>
        <Footer/>
    </div>
}