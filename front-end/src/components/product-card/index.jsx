import React from 'react';
import img from "../../img/Frame 11200.png"
import Card from 'react-bootstrap/Card';
import "./productCard.css"

export function ProductCard(props) {
return (
    <Card onClick={props.onClick} className='card-container'>
        <div className="seller-info">
        <img className='seller-info_pic' src={props.sellerPic || img} />
        <h2 className="seller-info_name">{props.sellerName || "vendedor"}</h2>
        </div>
        <div style={{margin: "0 15px"}}>
            <Card.Img className='card-img' variant="top" src={props.productFoto || img} />
            <Card.Body style={{height:"170px"}}>
            <Card.Title className='card-title'>{props.productName || "Titulo del producto" }</Card.Title>
            <div>
                <Card.Text className='card-description'>{props.descripcion.slice(0,60)+"..." || "desctipcion breve del producto"} </Card.Text>
            </div>
            <h3 className='card-title'>${(props.precio.slice(0,6)) ||"Precio"}</h3>
            </Card.Body>   
        </div>
    </Card>
);
}
