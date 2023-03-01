import React from "react";
import "./cartCard.css"

export function CartCard(props){
    return <div className="cart-card_container">
        <img className="cart-card_foto" src={props.foto} />
        <div className="cart-card-info_container">
            <h2>{props.titulo}</h2>
            <p style={{textAlign:"left"}}>{props.description.slice(0,20)}</p>
            <h2>{props.precio.slice(0,7)}</h2>
        </div>

    </div>
}