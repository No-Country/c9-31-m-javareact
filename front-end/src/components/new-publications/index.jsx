import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const NewPublications = () => {
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
    <>
    <div className="div-titles"><h1 className="product-title">Recien publicado</h1>
<button className="product-carousel-button">Ver todo</button></div>
<div className="product-carousel-wrapper">
  <div className="product-carousel-container">
    {data.map((product) => (
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
</div>
</>
  );
};

export default NewPublications;