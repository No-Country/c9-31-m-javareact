import React from "react";
import { CategoryButtonArrow } from "../../img";
import "./buttons.css"


export function CategoryButton(props){

    return <button onClick={props.onClick} className="categoty-button"> {props.text}{props.arrow? <CategoryButtonArrow/>:""} </button>
}

export function BottomlessButton(props){
    return <button onClick={props.onClick} className="bottomless-button">{props.img}{props.text}</button>
}