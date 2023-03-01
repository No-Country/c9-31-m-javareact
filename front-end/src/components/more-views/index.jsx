import React from "react";
import "./more-views.css";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card";
import { useProducts, useVisitedProducts } from "../../hooks";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoreViews = (props) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [maxSlides, setMaxSlides] = React.useState(4);
  const [loading, setLoading] = React.useState(true);

  const data = useProducts();
  const numProducts = data.length;

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide) => Math.max(currentSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) =>
      Math.min(currentSlide + 1, Math.ceil(numProducts / maxSlides) - 1)
    );
  };

  React.useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
    if (window.innerWidth <= 768) {
      setMaxSlides(2);
    }
    if (window.innerWidth <= 480) {
      setMaxSlides(1);
    }
  }, [data]);

  // ? Aquí hacemos una comprobación del prop recibido de home:
  const { title } = props;
  let finalData = data;
  const visitedProducts = useVisitedProducts(); // Agregamos la constante visitedProducts

  // ? Caso 1. Prop "Nuevas Publicaciones" - Primero valida el prop y luego mediante un sort de data situamos los productos más nuevos
  if (title == "Nuevas Publicaciones") {
    finalData = React.useMemo(() => {
      return [...data].sort((a, b) => b.timeStamp - a.timeStamp);
    }, [data]);
  }

  // ? Caso 2. Prop "Vistos recien" - Primero validamos el prop y luego reorganizamos todo el array según el id:
  
  if (title === "Vistos Recién") {
    finalData = React.useMemo(() => {
      const visitedIds = new Set(visitedProducts.map((p) => p.id));
      return [...data].sort((a, b) => {
        if (visitedIds.has(a.id) && !visitedIds.has(b.id)) {
          return -1;
        }
        if (!visitedIds.has(a.id) && visitedIds.has(b.id)) {
          return 1;
        }
        return 0;
      });
    }, [data, visitedProducts]);
  }

  return (
    <>
      <div style={{ maxWidth: "1250px", margin: "30px auto" }}>
        <h1 className="section-title">{props.title}</h1>
        <div className="product-carousel-wrapper">
          <div className="product-carousel-container">
            <div className="product-carrousel-position">
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
                className="left-button-product"
              >
                <FaChevronLeft size={24} color="#444" />
              </button>

              {loading ? (
                <>
                  {[...Array(maxSlides)].map((_, i) => (
                    <div className="preloading-card" key={i}></div>
                  ))}
                </>
              ) : (
                finalData
                  .slice(
                    currentSlide * maxSlides,
                    (currentSlide + 1) * maxSlides
                  )
                  .map((p) => (
                    <ProductCard
                      onClick={() => {
                        navigate("/item/" + p.id, { replace: true });
                      }}
                      key={p.id}
                      sellerName={p.usernameMail}
                      productFoto={p.fotos[0]}
                      productName={p.titulo}
                      descripcion={p.descripcion}
                      precio={p.precioDeVenta}
                    />
                  ))
              )}

              <button
                onClick={handleNextSlide}
                disabled={
                  currentSlide === Math.ceil(numProducts / maxSlides) - 1
                }
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
