import React from 'react'
import { useRef, useState } from "react";
import "./slider.css"
import img from './img';

const Slider = () => {
    const carousel = useRef();
    const [count, setCount] = useState(0);
  
    const incrementCarousel = delta => {
      if (!carousel.current) return;
  
      const width = carousel.current.offsetWidth;
  
      if (count + delta > img.length - 1) {
        setCount(0);
        carousel.current.scrollTo(0, 0);
        return;
      } else if (count + delta < 0) {
        setCount(img.length - 1);
        console.log(width, carousel.current.scrollLeft);
        carousel.current.scrollTo(width * img.length - 1, 0);
        return;
      }
  
      carousel.current.scrollTo(
        carousel.current.scrollLeft + width * delta,
        0
      );
      setCount(c => c + delta);
    };
  
    return (
      <div className="slider-carousel-container">
  <div
    className="slider-carousel-btn slider-left-btn"
    onClick={() => incrementCarousel(-1)}
  />
  <div
    className="slider-carousel-btn slider-right-btn"
    onClick={() => incrementCarousel(1)}
  />
  <div className="slider-carousel" ref={carousel}>
    {img.map((img, idx) => (
      <div
        key={`${idx}-${img.title}`}
        className={
          idx === count
            ? "slider-carousel-item active"
            : "slider-carousel-item"
        }
      >
        <img src={img.src} alt="img of carousel" />
        <p>{img.title}</p>
      </div>
    ))}
  </div>
</div>
    );
  };
  
  export default Slider;