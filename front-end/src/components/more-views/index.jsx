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

const MoreViews = () => {
  const [data, setData] = useState([]);

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
        <div key={product.id} className="product-carousel-item">
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