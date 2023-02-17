import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"



export function Item(){
    const [item, setItem] = useState({title:"",price:0})
    const [pictures, setPictures] = useState([])
    
    // ??aca en params te llega el id del producto
    const params =  useParams()

    console.log(params);
    //  ?? con una funcion asi aca tenes q traer los datos del producto en el que se hizo click 
    //  async function pullItem(id) {
    //  const response = await fetch("https://api.mercadolibre.com/items/"+id)    
    //  const prod = await response.json()
    //  setItem(prod)
    //  setPictures(prod.pictures)
    // }

    // useEffect(()=>{
    //     pullItem(params.id)
    // },[params])
        

    
    // ?? aca hay que armar la vista para mostrar en producto 
        return (
            <div>
                soy item {params.id} 
            </div>
            
        ) 
        
    
};
