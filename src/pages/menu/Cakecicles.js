import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/cakecicles.jpeg";
import img1 from "../../images/gallery/IMG_6409.jpeg";
import img2 from "../../images/gallery/IMG_6382.jpeg";
import img3 from "../../images/gallery/IMG_6397.jpeg";

export default function Cakecicles() {
  const price = <div>Starting at $5 each (minimum 6)</div>;
  const description = (
    <div>
      <p>Vanilla Cake with Chocolate Ganache</p>
    </div>
  );
  return (
    <MenuItem
      title="CAKECICLES"
      price={price}
      description={description}
      image={mainImage}
      galleryImg1={img1}
      galleryImg2={img2}
      galleryImg3={img3}
    />
  );
}
