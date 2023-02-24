import React from "react";
import { Regalo } from "../../img";
import { Logo } from "../../ui/logo/index";
import { SearchBar } from "../search-bar/index";
import { Link } from "react-router-dom";
import "./header.css"
import { useUser } from "../../hooks";

export default function Header() {
useUser()
    return <div className="header-conteiner">
        <Logo />
        <SearchBar />
        <div className="header-buttons">
            <Link to="/sell">
                <button className="login-button">VENDER</button>
            </Link>
            <button className="header-gift_button"><Regalo /></button>
        </div>
    </div>
}

