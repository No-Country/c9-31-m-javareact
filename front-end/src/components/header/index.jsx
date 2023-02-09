import React from "react";
import { Regalo } from "../../img";
import { SearchBar } from "../search-bar/index";
import "./header.css"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate()

    return <div className="header-conteiner">
        <div onClick={()=>{navigate("/",{replace:true})}}className="logo">TESH</div>
        <SearchBar/>
        <div className="header-buttons">
            <button  className="login-button">Vender</button>
            <button className="header-gift_button"><Regalo/></button>
        </div>

    </div>
}

