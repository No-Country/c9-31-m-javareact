import React, {useState} from "react";
import { Regalo,WhiteSearchIcon, WhiteShoppingBagIcon, WhiteUserIcon } from "../../img";
import { Logo } from "../../ui/logo/index";
import { SearchBar } from "../search-bar/index";
import "./header.css"
import { useUser } from "../../hooks";
import Hamburger from 'hamburger-react'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
const navigate = useNavigate()
const [isOpen, setOpen] = useState(false)


useUser()
    return <div className="header-conteiner">
        <div className="responsive-wrap">
            <Hamburger color="white" type="titl" toggled={isOpen} toggle={setOpen} />
        </div>
        <Logo />
        <div className="responsive-wrap">
            <WhiteSearchIcon onClick={()=>{navigate("/resultados/", { replace: true })}}/>
            <WhiteUserIcon onClick={()=>{console.log("ogin");}}/>
            <WhiteShoppingBagIcon onClick={()=>{console.log("carrito");}}/>
        </div>
        {isOpen? <div className="menu-header-responsive">
            <ul>
                <li className="menu-header-responsive_option" onClick={()=>{navigate("/sell", { replace: true });setOpen(!isOpen)}}>Vender</li>
            </ul>
        </div>:"" }
       
        <SearchBar />
        <div className="header-buttons">
            <Link to="/sell">
                <button className="login-button">VENDER</button>
            </Link>
            <button className="header-gift_button"><Regalo /></button>
        </div>
    </div>
}

