import React from "react";
import Slider from "../../components/slider";
import MoreViews from "../../components/more-views";
import { useUser } from "../../hooks";

export function Home(){
    useUser()
    return <>
        <Slider />
        <MoreViews title="Mas vistos"/>
        <MoreViews title="Nuevas Publicaciones"/>
        <MoreViews title="Vistos Recien"/>
    </>
}