import React, {useState} from "react";
import { CategoryButtonArrow } from "../../img";
import "./buttons.css"
import { useNavigate } from "react-router-dom";



export function CategoryButton(props){

    return <button onClick={props.onClick} className="categoty-button">{props.text}{props.arrow? <CategoryButtonArrow/>:""} </button>
}

export function BottomlessButton(props){
    return <button onClick={props.onClick} className="bottomless-button">{props.img}{props.text}</button>
}

export function RedesButton(props){
    return <button className="redes-button">{props.img? props.img:""}{props.text}</button>
}

export function ConfirmButton(props){
    return <button onClick={props.onClick} className="confirm-button" type={props.type} >{props.text}</button>
}

export function LoginButton(props){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const storedUser = localStorage.getItem("user");
    function logout() {
        localStorage.clear();
        isLogged = false;
        window.location.reload();
    }
    let isLogged = false;
    if (storedUser) {
        isLogged = true;
    }

    function handleClick() {
        if (isLogged) {
            setIsOpen(!isOpen);
        } else navigate("/login", { replace: true });
    }

    
    return <div>
     <button onClick={handleClick} style={{border:"none",background:"none", margin:"none"}}>{props.children}</button>
        {isOpen && (
            <div className="submenu">
                <ul className="options-submenu-container"> 
                <li className="options-submenu responsive" onClick={() => {navigate("/sell", { replace: true });;setIsOpen(!isOpen)}}>Vender</li>        
                <li
                    className="options-submenu"
                    onClick={() => {
                    navigate("/misventas", { replace: true });
                    setIsOpen(!isOpen)
                    }}
                >
                    Ventas
                </li>
                <li className="options-submenu">Compras</li>
                <li className="options-submenu">Perfil</li>
                <li className="options-submenu" onClick={() => {logout();setIsOpen(!isOpen)}}>
                    Salir
                </li>
                </ul>
            </div>
            )}
    </div>
} 