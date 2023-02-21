import React from "react";
import "./more-views.css";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import { useProducts } from "../../hooks";

const MoreViews = (props) => {
  const navigate = useNavigate()
  const data = useProducts()
  
  return (
    <>
  <div style={{maxWidth:"1250px", margin:"30px auto"}}>
    <h1 className="section-title">{props.title}</h1>
    <div className="product-carousel-wrapper">
      <div className="product-carousel-container">
        <div>
          {data.map((p)=>{
            return  <ProductCard
            onClick={()=>{navigate("/item/"+p.id , { replace: true })}}
            key={p.id}
            sellerName={p.email} 
            productFoto={p.img} 
            productName={p.productName} 
            descripcion={p.productdescription} 
            precio ={p.price} />
          })}
        </div>
      </div>
    </div>
  </div>
  
</>
  );
};

export default MoreViews;