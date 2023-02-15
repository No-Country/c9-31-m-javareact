import React, { useState } from "react";


const NewPublications = () => {
    const [translateValue, setTranslateValue] = useState(0);
    const elementCount = 5; // número total de elementos en el carrusel
    const elementsToShow = 3; // número de elementos que se muestran en el carrusel
  
    const goPrev = () => {
      if (translateValue < 0) {
        setTranslateValue(translateValue + 300);
      }
    };
  
    const goNext = () => {
      if (translateValue > -300 * (elementCount - elementsToShow)) {
        setTranslateValue(translateValue - 300);
      }
    };
  
    return (
      <div className="product-carousel-container">
        <h1>Nuevas publicaciones</h1>
        <div
          className="product-carousel-track"
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {/* Aquí abajo se reenderizan los productos */}
          {[...Array(elementCount)].map((_, index) => (
            <div key={index} className="product-carousel-item">
              <div className="product-seller-info">
                <div className="product-seller-logo"></div>
                <h3>Nombre del Vendedor</h3>
              </div>
              <img
                src="https://via.placeholder.com/264x280.png"
                alt="Product Image"
              />
              <div className="product-item-info">
                <h4>Nombre del Producto</h4>
                <p>Descripción del producto</p>
                <span className="product-item-price">$99.99</span>
              </div>
            </div>
          ))}
        </div>
        <div className="product-carousel-arrows">
          <button
            onClick={goPrev}
            className="product-carousel-arrow product-carousel-prev-arrow"
          >
            {"<"}
          </button>
          <button
            onClick={goNext}
            className="product-carousel-arrow product-carousel-next-arrow"
          >
            {">"}
          </button>
        </div>
      </div>
    );
  };

export default NewPublications;      