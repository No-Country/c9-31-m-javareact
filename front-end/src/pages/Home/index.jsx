import React from "react";
import Slider from "../../components/slider";
import MoreViews from "../../components/more-views";
import NewPublications from "../../components/new-publications";
import Recommended from "../../components/recommended";

export function Home(){
    return <>
        <Slider />
        <MoreViews />
        <NewPublications / >
        <Recommended / >
    </>
}