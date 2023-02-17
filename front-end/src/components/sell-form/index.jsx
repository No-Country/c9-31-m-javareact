import { useState } from "react";
import React from "react";
import "./sellForm.css"
import { LoadPhoto } from "../../img";

export function SellForm(){
    const [file, setFile] = useState("");
    return <div className="sell-form_conteiner">
        <form action="">
            <div className="sell-form_titleandphoto">
                <h2 className="sell-form_title">Vendé tu prenda</h2>
                <div className="sell-form_photo">
                    <LoadPhoto/>
                    <p className="sell-form_photo_instructions">Agregá o arrastrá tu foto aquí</p>
                </div>
                <p className="sell-form_photodescription">Podés subir máximo 6 fotos. Asegurate de que tengan buena luz y fondo claro. Tu prenda debe estar en buen estado, 
                limpia y prolija. Solo puede tener 1 o 2 defectos y debes incluir fotos de estos. Si está muy sucia, manchada o desgastada tu publicación será rechazada.  
                <a style={{color:"black", margin: "0 5px"}} href="https://es.wix.com/blog/2015/06/11-trucos-para-fotografia-de-productos/?utm_source=google&utm_medium=cpc&utm_campaign=12446219914^117820822545&experiment_id=^^501731587802^^_DSA&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrLPl8hXDkVjAA7SuS6t3SIS4ONetB38P0B5MDop-eJWTLwA3Bb1A0aAiGnEALw_wcB">
                Más Consejos</a> </p>
            </div>
        </form>
    </div>
}

