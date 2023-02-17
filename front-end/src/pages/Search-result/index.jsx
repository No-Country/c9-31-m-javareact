import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const q = query(collection(db, "products"), where("productName", ">=", searchTerm));
      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      setSearchResults(products);
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>
            
            <h2>{product.productName}</h2>
            <img src={product.img} alt={product.name} style={{ width: '264px', height: '280px' }} />
            <p>{product.productDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;