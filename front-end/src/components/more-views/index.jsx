import React from "react";
import "./more-views.css";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import { useProducts } from "../../hooks";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoreViews = (props) => {
  const navigate = useNavigate()
  const data = useProducts()
  //console.log(data);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const maxSlides = 4;

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide) => Math.max(currentSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) => Math.min(currentSlide + 1, maxSlides));
  };

  return (
    <>
      <div style={{ maxWidth: "1250px", margin: "30px auto" }}>
        <h1 className="section-title">{props.title}</h1>
        <div className="product-carousel-wrapper">
          <div className="product-carousel-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
              }}
            >
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "2px solid #ddd",
                }}
              >
                <FaChevronLeft size={24} color="#444" />
              </button>
              {data
                .slice(currentSlide, currentSlide + 4)
                .map((p) => (
                  <ProductCard
                    onClick={() => {
                      navigate("/item/" + p.id, { replace: true });
                    }}
                    key={p.id}
                    sellerName={p.email}
                    productFoto={p.fotos[0]}
                    productName={p.titulo}
                    descripcion={p.descripcion}
                    precio={p.precioDeVenta}
                  />
                ))}
              <button
                onClick={handleNextSlide}
                disabled={currentSlide === maxSlides}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "2px solid #ddd",
                }}
                className="right-button-product"
              >
                <FaChevronRight size={24} color="#444" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreViews;