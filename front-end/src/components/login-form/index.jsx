import React from "react";
import "./loginForm.css"

export function LoginForm(){
    function handleSubmit(e){
        e.preventDefault()
        console.log("soy form")
    }
    return <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-form_input" placeholder="E-mail" type="email"/>
            <input className="login-form_input" placeholder="Contraseña" type="password"/>
            <button className="login-form_button">Ingresar</button>
        </form>
        </div>
}