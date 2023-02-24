import React from "react";
import { Lupa } from "../../img/index";
import "./search.css"
import { Link } from "react-router-dom";

export let searchTerm;

export function SearchBar(){
    
    function handleSearch(){
        searchTerm = document.querySelector(".search-input").value;
    }
    

    return <div className="search-conteiner">
        <Link to="/resultados">
        <button className="search-button" type="submit" onClick={handleSearch}>
            <Lupa/>
        </button>
        </Link>
        <input className="search-input" type="text" name="search" placeholder="Buscar prendas, marcas, colores y más" />
    </div>
}

