import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { CartCard } from "../cart-card";
import{ DeleteIcon} from "../../img/index";
import "./shoppingCart.css";


function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const localCart = JSON.parse(localStorage.getItem("carrito")) 
  const [deleteItem, setDeleteItem] = useState("")
  let total = 0;

  function deleteItemById(array, id) {
    let index = array.findIndex(item => item.id === id);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  
  if(localCart){
    deleteItemById(localCart,deleteItem );
    localStorage.setItem("carrito",JSON.stringify(localCart) );
    total = localCart.reduce((acc, curr) => acc + parseFloat(curr.precio), 0);
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {localCart? localCart.map((p)=>{
            return <div className="cart_container">
              <CartCard foto={p.portada} titulo={p.titulo} description={p.description} precio={"$" + p.precio}/>
              <button onClick={()=>{console.log(p.id);setDeleteItem(p.id)}} className="delete_button"><DeleteIcon/></button>
            </div>
        }): <p> sin productos</p>}
        <p>Total: ${total}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
            variant="primary"
            onClick={() => navigate("/checkout", { replace: true })}
        >
            Ir a la compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export function ShoppingCart(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{border:"none", background:"none", marginTop:"7px"}} onClick={() => setModalShow(true)}>
        {props.children}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

