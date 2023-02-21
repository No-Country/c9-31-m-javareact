import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ItemCarousel } from "../../components/item-carousel";
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
      <ItemCarousel fotos={fotos}/>
      <p>{description}</p>
      <span>${precioDeVenta}</span>
    </div>
  );
};

export default ProductDetail;
