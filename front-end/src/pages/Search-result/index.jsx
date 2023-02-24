import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/product-card";
import { useProducts } from "../../hooks";
import { searchTerm } from "../../components/search-bar";

const SearchProducts = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const data = useProducts();

  

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <>
      <div style={{ maxWidth: "1250px", margin: "30px auto" }}>
        <h1 className="section-title">Search Products</h1>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        />
        <div>
          {data
            .filter((p) => p.titulo.toLowerCase().includes(query.toLowerCase()))
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
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
