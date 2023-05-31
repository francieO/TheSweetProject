import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/oreos.jpeg";
import img1 from "../../images/gallery/IMG_6357.jpeg";
import img2 from "../../images/gallery/IMG_6381.jpeg";
import img3 from "../../images/gallery/IMG_6384.jpeg";

export default function decoratedOreos() {
  const price = "Starting at $2 each (one dozen minimum)";
  const description = <p>Choose your own design</p>;
  return (
    <MenuItem
      title="DECORATED OREOS"
      price={price}
      description={description}
      image={mainImage}
      galleryImg1={img1}
      galleryImg2={img2}
      galleryImg3={img3}
    />
  );
}
