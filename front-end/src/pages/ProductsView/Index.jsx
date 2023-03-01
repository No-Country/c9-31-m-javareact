import React from "react";
import "./product-view.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const ProductsView = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="datatable">
      <h2>Aquí abajo se renderizan los productos subidos en sell. Falta mejorar las vistas</h2>
      <table className="datatable__table">
        <thead>
          <tr>
            <th>aaaa</th>
            <th>aaaa</th>
            <th>Image</th>
            <th>aaaaa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.productName}</td>
              <td>{row.productdescription}</td>
              <td>{row.price}</td>
              <td><img src={row.img} alt={row.name} style={{width: '100px', height: '100px'}}/></td>
              <td>
                <div className="cellAction">
                  {/* Falta hacer que al hacer click mande a la información específica del producto */}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                  <div
                    className="deleteButton"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsView;