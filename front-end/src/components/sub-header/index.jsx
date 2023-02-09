import React from "react";
import { BottomlessButton, CategoryButton } from "../../ui/buttons";
import { LoginImg, ShoppingBag } from "../../img";
import "./subHeader.css"
import { useNavigate } from "react-router-dom";


export function SubHeader(){
    const navigate = useNavigate()
    function handleClick(){
        navigate("/login",{replace:true})
    }
    return <div className="sub_header-conteiner">
        <div className="category-conteiner">
            <CategoryButton text="mujer" arrow={true} />
            <CategoryButton text="Hombres" arrow={true} />
            <CategoryButton text="Niños" arrow={true} />
            <CategoryButton text="Ofertas" arrow={true} />
            <CategoryButton text="Sobre Nosotros" arrow={true} />
        </div>

        <div className="category-conteiner">
            <BottomlessButton onClick={handleClick} text="Ingresá / Registrate" img={<LoginImg/>}></BottomlessButton>
            <BottomlessButton text="Carrito" img={<ShoppingBag/>} ></BottomlessButton>
        </div>
    </div>
}