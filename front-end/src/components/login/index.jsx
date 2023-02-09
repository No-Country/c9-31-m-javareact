import React from "react";
import { FacebookIcon, GoogleIcon } from "../../img";
import { RedesButton } from "../../ui/buttons";
import { LoginForm } from "../login-form/index";
import "./login.css"

export function Login (){
    return <div className="login-conteiner">
        <div className="login-redes">
            <p>Inicia sesión con tus redes</p>
            <div className="login-redes_buttons">
                <RedesButton img={<GoogleIcon/>} text="GOOGLE"/>
                <RedesButton img={<FacebookIcon/>} text="FACEBOOK"/>
            </div>
        </div>
        <div className="login-email">
            <p>Inicia sesión con tu e-mail</p>
            <LoginForm/>
        </div>
    </div>
}