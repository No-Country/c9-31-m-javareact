import React from "react";
import { Login } from "../../components/login/index";
import "./loginPage.css"

export function LoginPage(){
    return <div className="login-page_conteiner">
        <div className="login-page_carousel"/>
        <Login/>
    </div>
}