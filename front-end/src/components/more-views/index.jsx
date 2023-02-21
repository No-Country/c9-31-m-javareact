import React from "react";
import "./more-views.css";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import { useMoreViews } from "../../hooks";

const MoreViews = () => {
  const navigate = useNavigate()
  const data = useMoreViews()
  
  return (
    <>
  <h1 className="products-title">Más vistos</h1>
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
</>
  );
};

export default MoreViews;