
import React, { useState } from "react";
import "./header.css"

export default function Header(){
    const [clicked, setClicked] = useState("false")
    function handleClick(){
        setClicked(!clicked)
    }
    return <div className="header-conteiner">
        <div className="logo">LOGO</div>
        <button onClick={handleClick} className="login-button">{clicked? "login" : "mi perfil"} </button>
    </div>
}

