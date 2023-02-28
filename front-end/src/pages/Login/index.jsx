import React from "react";
import LoginCarousel from "../../components/login-carousel";
import { Login } from "../../components/login/index";
import "./loginPage.css"

export function LoginPage(){
    return <div className="login-page_conteiner">
        <div className="login-page_carousel">
            <LoginCarousel/>
        </div>
        <Login/>
    </div>
}