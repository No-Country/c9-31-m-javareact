import React from "react";
import { Regalo } from "../../img";
import { Logo } from "../../ui/logo/index";
import { SearchBar } from "../search-bar/index";
import "./header.css"

export default function Header(){

    return <div className="header-conteiner">
        <Logo/>
        <SearchBar/>
        <div className="header-buttons">
            <button className="login-button">Vender</button>
            <button className="header-gift_button"><Regalo/></button>
        </div>
    </div>
}

