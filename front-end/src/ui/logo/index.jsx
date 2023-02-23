import React from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css"

export function Logo(props){
    const navigate = useNavigate()
    return <div style={props.style} className="logo" onClick={()=>{navigate("/",{replace:true})}}>TESH</div>
}