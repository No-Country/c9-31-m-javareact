import React from "react";
import { Lupa } from "../../img/index";
import "./search.css"
import { Link, useNavigate } from "react-router-dom";


export let searchTerm;

export function SearchBar(){
    const navigate = useNavigate()
    
    function handleSearch(){
        searchTerm = document.querySelector(".search-input").value;
    }
    

    return <div className="search-conteiner">
        <Link to="/resultados/">
        <button className="search-button" type="submit" onClick={handleSearch}>
            <Lupa/>
        </button>
        </Link>
        <input 
        className="search-input" 
        type="text" name="search" 
        placeholder="Buscar prendas, marcas, colores y más"
        onChange={(event) =>  navigate("/resultados/" + event.target.value, { replace: true })} />
    </div>
}

