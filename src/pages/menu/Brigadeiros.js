import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/brigadeiros.jpeg";
import img1 from "../../images/gallery/IMG_6410.jpeg";
import img2 from "../../images/gallery/IMG_6448.jpg";
import img3 from "../../images/gallery/IMG_6435.jpg";

export default function Brigadeiros() {
  const price = (
    <div>
      6 for $12 (1 flavor) <br></br>
      12 for $24 (2 flavors) <br></br>
      24 for $45 (3 flavors) <br></br>
      50 for $95 (5 flavors)
    </div>
  );
  const description = (
    <div>
      <p>
        Classic <br></br>
        White Chocolate <br></br>
        Fererro Rocher <br></br>
        Walnut <br></br>
        Strawberry
      </p>
    </div>
  );
  return (
    <MenuItem
      image={mainImage}
      title="BRIGADEIROS"
      price={price}
      description={description}
      galleryImg1={img1}
      galleryImg2={img2}
      galleryImg3={img3}
    />
  );
}
