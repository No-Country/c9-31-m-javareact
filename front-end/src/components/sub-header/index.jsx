import React from "react";
import { BottomlessButton, CategoryButton } from "../../ui/buttons";
import { LoginImg, ShoppingBag } from "../../img";
import "./subHeader.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useCart, productincart } from "../../hooks";


export function SubHeader() {
    const cart = items;
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const storedUser = localStorage.getItem("user");
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const navigate = useNavigate();
  
    const { items, addItem, removeItem, updateItemQuantity } = useCart(); // Movido aquí
  
    function CartModal({ show, handleClose }) {
      const cart = items; // Definido aquí
      const [items, setItems] = useState(cart);
      
      useEffect(() => {
        setItems(cart);
      }, [cart]);

    }
    function logout(){
        localStorage.clear();
        isLogged = false;
        window.location.reload();
    }

   
    let isLogged = false;
    let email;
    if (storedUser) {
       // console.log(storedUser, "USER");
        const parsedUser = JSON.parse(storedUser);
        email = parsedUser.email;
        isLogged = true;
    } 


console.log("Muchachos, " + productincart)

    function handleClick(event) {
        if (isLogged) {
            setIsOpen(!isOpen);
            setPosition({ x: event.clientX, y: event.clientY });
        } else navigate("/login", { replace: true })
    }


    return <>
    <div className="sub_header-conteiner">
        <div className="category-conteiner">
            <CategoryButton text="Mujer" arrow={true} />
            <CategoryButton text="Hombres" arrow={true} />
            <CategoryButton text="Niños" arrow={true} />
            <CategoryButton text="Ofertas" arrow={true} />
            <CategoryButton text="Sobre Nosotros" arrow={true} />
        </div>

        <div className="category-conteiner">
            <BottomlessButton onClick={handleClick} text={email? email:"Iniciar sesión / Registrarse"} img={<LoginImg />}></BottomlessButton>
            {isOpen && (
                <div className="submenu">
                    <ul className="options-submenu-container">
                        <li className="options-submenu">Nivel 0</li>
                        <li className="options-submenu" onClick={()=>{navigate("/misventas", { replace: true })}}>Ventas</li>
                        <li className="options-submenu">Compras</li>
                        <li className="options-submenu">Configuracion</li>
                        <li className="options-submenu">Perfil</li>
                        <li className="options-submenu" onClick={() => logout()}>Salir</li>
                    </ul>
                </div>
          
            )}
            <BottomlessButton text="Carrito" img={<ShoppingBag />} onClick={handleShow}></BottomlessButton>
        </div>

    </div>
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Tengo que ver como lograr hacer funcionar lo siguiente  */}
        {/* {productincart ? (
          productincart.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )} */
        productincart
        }
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={() => navigate("/checkout", { replace: true })}
        >
          Ir a la compra
        </Button>
      </Modal.Footer>
    </Modal>
          </>
}