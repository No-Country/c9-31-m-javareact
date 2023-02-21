import React from 'react';
import img from "../../img/Rectangle 25.png"
import Card from 'react-bootstrap/Card';
import "./productCard.css"

//hay q pasar por props los datos que tiene q mostrar la card
export function ProductCard(props) {
return (
    <Card onClick={props.onClick} className='card-container'>
        <div className="seller-info">
        <img className='seller-info_pic' src={props.sellerPic || img} />
        <h2 className="seller-info_name">{props.sellerName || "vendedor"}</h2>
        </div>
        <div style={{margin: "0 15px"}}>
            <Card.Img className='card-img' variant="top" src={props.productFoto || img} />
            <Card.Body>
            <Card.Title className='card-title'>{props.productName || "Titulo del producto" }</Card.Title>
            <Card.Text className='card-description'>{props.descripcion || "desctipcion breve del producto"} </Card.Text>
            <h3 className='card-title'>${(props.precio) ||"Precio"}</h3>
            </Card.Body>   
        </div>
    </Card>
);
}
