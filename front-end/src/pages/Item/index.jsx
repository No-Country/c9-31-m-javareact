import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productDoc = await getDoc(productRef);
      if (productDoc.exists()) {
        setProduct(productDoc.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>{product.productName}</h1>
      <img src={product.img} alt={product.name} style={{ width: '264px', height: '280px' }} />
      <p>{product.productdescription}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default ProductDetail;
