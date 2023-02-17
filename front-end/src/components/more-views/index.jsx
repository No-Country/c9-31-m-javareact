import React from "react";
import "./more-views.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const MoreViews = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);



  return (
    <div className="product-carousel-container">
        <h1>Con más vistas</h1>
      {data.map((product) => (
        // ?? en el div que contiene todo agregue un onClick que te lleva a la pag de muestra
        // estaria bueno que estas cards estuvieran armadas en un componente separado
        // entonces se escribe la funcion una ves y se pueden usar en todas las categorias donde se repite la card
        // mas vistas, nevas publicaciones y recomendaciones
        <div onClick={()=>{navigate("/item/"+product.id , { replace: true })}} key={product.id} className="product-carousel-item">
        <div className="product-seller-info">
          <div className="product-seller-logo"></div>
          <h3 className="product-user">{product.user}</h3>
        </div>
        <img src={product.img} alt={product.name} style={{ width: '264px', height: '280px' }} />
        
        <div className="product-item-info">
          <h4 className="product-name">{product.productName}</h4>
          <p className="product-description">{product.productdescription}</p>
          <span className="product-item-price">${product.price}</span>
        </div>
      </div>
      ))}
    </div>
  );
};

export default MoreViews;