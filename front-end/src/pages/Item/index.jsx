import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ItemCarousel } from "../../components/item-carousel";
import { getProductById, productState } from "../../hooks";
import { useCart } from "../../hooks";
import "./item.css";

const ProductDetail = () => {
  const [fotos, setFotos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [marca, setMarca] = useState("");
  const [description, setDescription] = useState("");
  const [estado, setEstado] = useState("");
  const [precioDeVenta, setPrecioDeVenta] = useState("");
  const { id } = useParams();
  getProductById(id);
  const product = useRecoilValue(productState);

  useEffect(() => {
    setFotos(product.fotos);
    setMarca(product.marca);
    setTitulo(product.titulo);
    setEstado(product.estado);
    setDescription(product.descripcion);
    setPrecioDeVenta(product.precioDeVenta);
  }, [product]);

  const { addItem } = useCart();
  const handleAddToCart = () => {
    addItem({ id, titulo, precioDeVenta });
  };

  return (
    <div className="product-main-container">
      <div className="product-main-images">
        <div className="product-main-images-small">
          {fotos &&
            fotos
              .slice(0, 3)
              .map((foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`Foto pequeña ${index}`}
                  className="product-main-small-image"
                />
              ))}
        </div>

        <div className="product-main-images-main">
          {fotos && fotos.length > 0 && (
            <img
              src={fotos[0]}
              alt={`Foto principal de ${titulo}`}
              className="product-main-main-image"
            />
          )}
        </div>
      </div>
      <div className="product-main-details">
        <h3 className="product-main-username">Manuela Perez</h3>

        <h1 className="product-main-name">{titulo}</h1>
        <p className="product-main-marca">{marca}</p>
        <span className="product-main-price">${precioDeVenta}</span>
        <p className="product-main-description">{estado}</p>
        <h3 className="product-main-description-title">Descripción:</h3>
        <p className="product-main-description">{description}</p>
        <div className="product-main-buttons">

          <button className="product-main-button"><p className="product-main-comprar">Comprar</p></button>
          <button onClick={handleAddToCart} className="product-main-button-cart">
            <p className="product-main-agregar">Agregar al carrito</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
