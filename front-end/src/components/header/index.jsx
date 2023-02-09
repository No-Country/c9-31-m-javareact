import React from "react";
import { Regalo } from "../../img";
import { SearchBar } from "../search-bar/index";
import "./header.css"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate()
    function handleClick(){
        navigate("/login",{replace:true})
    }

    return <div className="header-conteiner">
        <div className="logo">TESH</div>
        <SearchBar/>
        <div className="header-buttons">
            <button  className="login-button" onClick={handleClick}>Vender</button>
            <button className="header-gift_button"><Regalo/></button>
        </div>

    </div>
}

