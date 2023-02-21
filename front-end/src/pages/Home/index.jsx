import React from "react";
import Slider from "../../components/slider";
import MoreViews from "../../components/more-views";

export function Home(){
    return <>
        <Slider />
        <MoreViews title="Mas vistos"/>
        <MoreViews title="Nuevas Publicaciones"/>
        <MoreViews title="Vistos Recien"/>
    </>
}