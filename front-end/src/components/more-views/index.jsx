import React from "react";
import "./more-views.css";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import { useProducts } from "../../hooks";

const MoreViews = (props) => {
  const navigate = useNavigate()
  const data = useProducts()
  console.log(data);
  return (
    <>
  <div style={{maxWidth:"1250px", margin:"30px auto"}}>
    <h1 className="section-title">{props.title}</h1>
    <div className="product-carousel-wrapper">
      <div className="product-carousel-container">
        <div style={{  display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"}}  >
          {data.map((p)=>{
            return  <ProductCard
            onClick={()=>{navigate("/item/"+p.id , { replace: true })}}
            key={p.id}
            sellerName={p.email} 
            productFoto={p.img || p.fotos} 
            productName={p.productName || p.titulo} 
            descripcion={p.productdescription || p.descripcion} 
            precio ={p.price || p.precioDeVenta} />
          })}
        </div>
      </div>
    </div>
  </div>
  
</>
  );
};

export default MoreViews;