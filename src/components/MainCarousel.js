import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from "../data";

function MainCarousel() {
  return (
    <Carousel>
      {CarouselData.map((slideData, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={slideData.imgUrl}
            alt={slideData.alt}
            height="400px"
          />
          <Carousel.Caption>
            <h3>{slideData.title}</h3>
            <p>{slideData.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default MainCarousel;
