import { query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card";
import { useProducts } from "../../hooks";
import "./search-result.css"

const SearchProducts = () => {
  const navigate = useNavigate();
  const data = useProducts();
  const params = useParams()

  let result;
  
  if(params.query){
  result = data.filter((p)=>
  p.titulo.toLowerCase().includes(params.query.toLowerCase())||
  p.genero.toLowerCase().includes(params.query.toLowerCase())||
  p.prenda.toLowerCase().includes(params.query.toLowerCase())); 
  }
 


  return (
    <>
      <div style={{ maxWidth: "1250px", margin: "30px auto" }}>
        <h1 className="section-title">Buscador de prendas</h1>
        <div className="product-card-container">
          {params.query?
          result
            .map((p) => (
              <div className="product-card-wrapper" key={p.id}>
                <ProductCard
                  onClick={() => {
                    navigate("/item/" + p.id, { replace: true });
                  }}
                  sellerName={p.email}
                  productFoto={p.fotos[0]}
                  productName={p.titulo}
                  descripcion={p.descripcion}
                  precio={p.precioDeVenta}
                />
              </div>
            )):
            data
            .map((p) => (
              <div className="product-card-wrapper" key={p.id}>
                <ProductCard
                  onClick={() => {
                    navigate("/item/" + p.id, { replace: true });
                  }}
                  sellerName={p.email}
                  productFoto={p.fotos[0]}
                  productName={p.titulo}
                  descripcion={p.descripcion}
                  precio={p.precioDeVenta}
                />
              </div>))
            }
        </div>
      </div>
    </>
  );
};

export default SearchProducts;

