import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProductById,productState } from "../../hooks";

const ProductDetail = () => {
  const [fotos, setFotos] = useState([])
  const [titulo, setTitulo] = useState("")
  const [description, setDescription] = useState("")
  const [precioDeVenta, setPrecioDeVenta] = useState ("")
  const { id } = useParams();
  getProductById(id)
  const product = useRecoilValue(productState)

  useEffect(()=>{
    setFotos(product.fotos);
    setTitulo(product.titulo);
    setDescription(product.descripcion);
    setPrecioDeVenta(product.precioDeVenta);
  },[product])
  


  console.log(product);
  return (
    <div>
      <h1>{titulo}</h1>
      <img src= {fotos} style={{ width: '264px', height: '280px' }} />
      <p>{description}</p>
      <span>${precioDeVenta}</span>
    </div>
  );
};

export default ProductDetail;
