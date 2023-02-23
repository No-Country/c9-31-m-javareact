import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./itemCarousel.css"

export function ItemCarousel(props) {
const [index, setIndex] = useState(0);
const [fotos, setFotos] = useState([])


useEffect(()=>{
    setFotos(props.fotos)
},[props.fotos])

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

    return (
    <Carousel className='carousel-container' activeIndex={index} onSelect={handleSelect}>
    {fotos? fotos.map((f)=>{
    return( <Carousel.Item key={f}>
        <img style={{width:"350px", height:"300px"}} src={f}/>
        
    </Carousel.Item>)
}):<div>
    no foto
</div>
    }
    </Carousel>
    );
}


