import React, { useState } from "react";
import "./header.css"

export default function Header(){
    const [clicked, setClicked] = useState("false")
    function handleClick(){
        setClicked(!clicked)
    }
    return <nav>
    <div class="left">
        <a href="/">Tesh</a>
        </div>
    <form class="search-form">
      <input type="text" placeholder="Search" />
      <button class="search-btn">Search</button>
    </form>
    <button class="sell-btn">Sell</button>
    <div class="gift-icon"></div>
  </nav>
  
}

