import { useState } from "react";
import React from "react";
import "./sellForm.css"
import { LoadPhoto } from "../../img";
import { Previews } from "../preview";
import { useRecoilValue } from "recoil";
import { picturesURLState } from "../../hooks";
import { InputButton, SelectBasic } from "../../ui/inputs";


export function SellForm(){
    const [showDropzpne,  setShowDropzpne] = useState(false)
    const imgs = useRecoilValue(picturesURLState)
    const [genero, setGenero] = useState("")
    const [estado, setEstado] = useState("")
    const [talle, setTalle] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        console.log("submit", 
        e.target.genero.value,
        e.target.prenda.value,
        e.target.marca.value
        );
    }
 
    function handleClick(){
        setShowDropzpne(true)
        if(imgs.length === 6){
        window.alert("Podés subir máximo 6 fotos")
    }
    }

    return <div className="sell-form_conteiner">
        <form onSubmit={handleSubmit}>
            <div className="sell-form_titleandphoto">
                <h2 className="sell-form_title">Vendé tu prenda</h2>
                <div onClick={handleClick}className="sell-form_photo">
                    {showDropzpne? <div className="sell-form_photo">
                        <Previews/>
                        <Previews/>
                        <Previews/>
                        <Previews/>
                        <Previews/>
                        <Previews/>
                    </div> : 
                    <div>
                    <LoadPhoto/>
                    <p className="sell-form_photo_instructions">Agregá tu foto aquí</p> 
                </div>
                    }
                </div>
                <p className="sell-form_photodescription">Podés subir máximo 6 fotos. Asegurate de que tengan buena luz y fondo claro. Tu prenda debe estar en buen estado, 
                limpia y prolija. Solo puede tener 1 o 2 defectos y debes incluir fotos de estos. Si está muy sucia, manchada o desgastada tu publicación será rechazada.  
                <a style={{color:"black", margin: "0 5px"}} href="https://es.wix.com/blog/2015/06/11-trucos-para-fotografia-de-productos/?utm_source=google&utm_medium=cpc&utm_campaign=12446219914^117820822545&experiment_id=^^501731587802^^_DSA&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrLPl8hXDkVjAA7SuS6t3SIS4ONetB38P0B5MDop-eJWTLwA3Bb1A0aAiGnEALw_wcB">
                Más Consejos</a> </p>
            </div>
            <div className="sell-form_kind__container">
            <div className="sell-form_kind">
            <label className="sell-form_label">Genero:
                <div className="sell-form_kind__butons-conteiner" >
                    <InputButton className="sell-options-button" onClick={()=>{setGenero("Femenino")}} type="button" value="Femenino"/>
                    <InputButton className="sell-options-button" onClick={()=>{setGenero("Masculino")}} type="button" value="Masculino"/>
                    <InputButton className="sell-options-button" onClick={()=>{setGenero("Niños")}} type="button" value="Niños"/>
                    <input type="text" style={{display:"none"}} name="genero" value={genero}/>
                </div>
            </label>
            <label className="sell-form_label">Prenda:
                <SelectBasic className="sell-form_input__select" name="prenda" value={["Remera", "Pantalon", "Campera","Zapatos","Otro"]}/>
            </label>
            <label className="sell-form_label">Marca:
                <SelectBasic className="sell-form_input__select" name="marca" value={["Adidas", "Nike", "Zara","Topper","Otra"]}/>
            </label>
            </div>
            <div className="sell-form_kind">
            <label className="sell-form_label">Estado:
                <div className="sell-form_kind__butons-conteiner grid" >
                    <InputButton className="sell-options-button grande" onClick={()=>{setEstado("Nuevo Con etiqueta")}} type="button" value="Nuevo con etiqueta"/>
                    <InputButton className="sell-options-button grande" onClick={()=>{setEstado("Nuevo Sin etiqueta")}} type="button" value="Nuevo sin etiqueta"/>
                    <InputButton className="sell-options-button grande" onClick={()=>{setEstado("Usado Pocas veces")}} type="button" value="Usado pocas veces"/>
                    <InputButton className="sell-options-button grande" onClick={()=>{setEstado("Usado Muchas veces")}} type="button" value="Usado muchas veces"/>
                    <input type="text" style={{display:"none"}} name="estado" value={estado}/>
                </div>
            </label>
            </div>
            <div className="sell-form_kind">
            <label className="sell-form_label">Color:
                <SelectBasic className="sell-form_input__select" name="color" value={["blanco","negro","gris","rojo","verde","azul","amarillo", "Otro"]}/>
            </label>
            <label className="sell-form_label">Estilo:
                <SelectBasic className="sell-form_input__select" name="marca" value={["deportivo","casual", "formal","Otra"]}/>
            </label>
            <label className="sell-form_label">Material:
                <SelectBasic className="sell-form_input__select" name="marca" value={["Algodón","Poliéster","Lino","Lana","Nylon","Lycra","Otra"]}/>
            </label>
            </div>
            <div className="sell-form_kind">
            <label className="sell-form_label">Talle:
                <div className="sell-form_kind__butons-conteiner grid" >
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("xs")}} type="button" value="XS"/>
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("s")}} type="button" value="S"/>
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("m")}} type="button" value="M"/>
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("l")}} type="button" value="L"/>
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("xl")}} type="button" value="XL"/>
                    <InputButton className="sell-options-button redondo" radius="50px" onClick={()=>{setTalle("xxl")}} type="button" value="XXL"/>
                    <input type="text" style={{display:"none"}} name="talle" value={talle}/>
                </div>
            </label>
            </div>
            </div>
            <button>ok</button>
        </form>
    </div>
}

