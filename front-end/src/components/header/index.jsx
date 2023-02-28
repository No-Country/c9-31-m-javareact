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
            <WhiteUserIcon onClick={()=>{console.log("ogin");navigate("/login", { replace: true })}}/>
            <WhiteShoppingBagIcon onClick={()=>{console.log("carrito");}}/>
        </div>
        {isOpen? <div className="menu-header-responsive">
            <ul className="menu-header-responsive_ul">
                <li className="menu-header-responsive_option" onClick={()=>{navigate("/resultados/femenino", { replace: true });setOpen(!isOpen)}}>Mujer</li>
                <li className="menu-header-responsive_option" onClick={()=>{navigate("/resultados/masculino", { replace: true });setOpen(!isOpen)}}>Hombre</li>
                <li className="menu-header-responsive_option" onClick={()=>{navigate("//resultados/niños", { replace: true });setOpen(!isOpen)}}>Niños</li>
                <li className="menu-header-responsive_option" onClick={console.log("sobre nosotros")}>Sobre Nosotros</li>
                <li className="menu-header-responsive_option" onClick={()=>{navigate("/resultados/", { replace: true });setOpen(!isOpen)}}>Ofertas</li>
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

