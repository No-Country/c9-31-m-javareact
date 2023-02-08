import React from "react";
import { Lupa } from "../../img/index";
import "./search.css"

export function SearchBar(){
    return <div className="search-conteiner">
        <button className="search-button" type="submit">
            <Lupa/>
        </button>
        <input className="search-input" type="text" name="search" placeholder="Buscar prendas, marcas, colores y más" />
    </div>
}