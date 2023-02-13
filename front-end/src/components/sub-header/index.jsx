import React from "react";
import { BottomlessButton, CategoryButton } from "../../ui/buttons";
import { LoginImg, ShoppingBag } from "../../img";
import "./subHeader.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SubHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const storedUser = localStorage.getItem("user");
    
    const navigate = useNavigate()


    //? Trae el email guardado en el localStorage dentro del componente de login, isLogged sirve para comprobar si mostrar el mail o la opción para registrarse
    // ?? aca saque el else porq lo agregue abajo. en la parte de text
    let isLogged = false;
    let email;
    if (storedUser) {
        console.log(storedUser, "USER");
        const parsedUser = JSON.parse(storedUser);
        email = parsedUser.email;
        isLogged = true;
    } 


    // ? Analiza si estamos logeados o no, en caso de que sí se despliega un menú a través de los useStates empleados y en caso de que no lleva a una página para iniciar sesión
    function handleClick(event) {
        if (isLogged) {
            setIsOpen(!isOpen);
            setPosition({ x: event.clientX, y: event.clientY });
        } else navigate("/login", { replace: true })
    }


    return <div className="sub_header-conteiner">
        <div className="category-conteiner">
            <CategoryButton text="Mujer" arrow={true} />
            <CategoryButton text="Hombres" arrow={true} />
            <CategoryButton text="Niños" arrow={true} />
            <CategoryButton text="Ofertas" arrow={true} />
            <CategoryButton text="Sobre Nosotros" arrow={true} />
        </div>

        <div className="category-conteiner">
            {/* //aca le cambie un poco la parte de text */}
            <BottomlessButton onClick={handleClick} text={email? email:"Iniciar sesión / Registrarse"} img={<LoginImg />}></BottomlessButton>
            {isOpen && (
                <ul style={{ position: "absolute", left: position.x, top: position.y }}>
                    <li>Perfil</li>
                    <li>Ventas</li>
                    <li>Otras</li>
                </ul>
            )}
            <BottomlessButton text="Carrito" img={<ShoppingBag />} ></BottomlessButton>
        </div>
    </div>
}