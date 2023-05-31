import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/cakepops.jpeg";
import img1 from "../../images/gallery/IMG_6408.jpeg";

export default function Cakepops() {
  const description = (
    <div>
      <p>Choose vanilla or chocolate cake</p>
    </div>
  );
  return (
    <MenuItem
      image={mainImage}
      title="CAKEPOPS"
      price="Starting at $2 each"
      description={description}
      galleryImg1={img1}
    />
  );
}
