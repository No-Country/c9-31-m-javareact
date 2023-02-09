import React from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css"

export function Logo(){
    const navigate = useNavigate()
    return <div className="logo" onClick={()=>{navigate("/",{replace:true})}}>TESH</div>
}