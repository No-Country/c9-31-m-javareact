import React from "react";
import { BottomlessButton, CategoryButton } from "../../ui/buttons";
import { LoginImg, ShoppingBag } from "../../img";
import "./subHeader.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Modal, Button } from "react-bootstrap";
import { useCart, productincart } from "../../hooks";
import { getProductInCart } from "../../hooks";

export function SubHeader() {
  const cart = items;

  // ? Hooks para controlar si está abierto el submenú
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // ? Trae el usuario almacenado en el localstorage
  const storedUser = localStorage.getItem("user");

  // ? Valida si el modal del carrito debe ser mostrado
  const [show, setShow] = useState(false);

  // ? Funciones para cerrar o abrir el modal del carrito de compras
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  // ! Revisar esto, funciona con problemas
  let { items, addItem, removeItem, updateItemQuantity } = useCart(); //

  // ! Revisar esto
  function CartModal({ show, handleClose }) {
    const cart = items; // ! Revisar esto
    const [items, setItems] = useState(cart);

    useEffect(() => {
      setItems(cart);
    }, [cart]);
  }

  // ? Se activa al presionar salir, elimina el localstorage da como falso el islogged (que sirve para desplegar el submenu de usuario) y finalmente recarga la página para que se apliquen los cambios
  function logout() {
    localStorage.clear();
    isLogged = false;
    window.location.reload();
  }

  // ? En caso de que el usuario esté logeado se hace un json.parse para guardar el mail que se muestra y finalmente se establece a isLogged como true
  let isLogged = false;
  let email;
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    email = parsedUser.email;
    isLogged = true;
  }

  // ? Trae los productos almacenados en items para mostrarlos en el carrito
  items = getProductInCart();

  // ? Controla que debe hacerse al clickear en el menú de login/usuario según la variable isLogged
  function handleClick(event) {
    if (isLogged) {
      setIsOpen(!isOpen);
      setPosition({ x: event.clientX, y: event.clientY });
    } else navigate("/login", { replace: true });
  }

  // ? Retorno del componente
  return (
    <>
      <div className="sub_header-conteiner">
        <div className="category-conteiner">
          <CategoryButton onClick={()=>{navigate("/resultados/femenino", { replace: true })}} text="Mujer"  />
          <CategoryButton onClick={()=>{navigate("/resultados/masculino", { replace: true })}} text="Hombres"  />
          <CategoryButton onClick={()=>{navigate("/resultados/niños", { replace: true })}} text="Niños"  />
          <CategoryButton  text="Ofertas"  />
          <CategoryButton  text="Sobre Nosotros"  />
        </div>

        <div className="category-conteiner">
          <BottomlessButton
            onClick={handleClick}
            text={email ? email : "Iniciar sesión / Registrarse"}
            img={<LoginImg />}
          ></BottomlessButton>
          {isOpen && (
            <div className="submenu">
              <ul className="options-submenu-container">         
                <li
                  className="options-submenu"
                  onClick={() => {
                    navigate("/misventas", { replace: true });
                  }}
                >
                  Ventas
                </li>
                <li className="options-submenu">Compras</li>
                <li className="options-submenu">Perfil</li>
                <li className="options-submenu" onClick={() => logout()}>
                  Salir
                </li>
              </ul>
            </div>
          )}
          <BottomlessButton
            text="Carrito"
            img={<ShoppingBag />}
            onClick={handleShow}
          ></BottomlessButton>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Faltan los estilos  */}
          {productincart ? (
            productincart.map((item) => (
              <div key={item.id}>
                <p>{item.titulo}</p>
                <p>${item.precioDeVenta}</p>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            ))
          ) : (
            <p>El carrito está vacío.</p>
          )}
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
  );
}
