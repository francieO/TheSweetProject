import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = ({ images, interval }) => {
  return (
    <Carousel interval={interval}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt="sweetGallery" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
