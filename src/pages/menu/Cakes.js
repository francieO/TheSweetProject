import React from "react";
import MenuItem from "../../components/MenuItem";
import image from "../../images/cakes.jpeg";
import img1 from "../../images/gallery/IMG_6369.jpeg";
import img2 from "../../images/gallery/IMG_6441.jpg";
import img3 from "../../images/gallery/IMG_6402.jpeg";

export default function Cakes() {
  const price = <div>Inquire for pricing</div>;
  const description = (
    <div>
      <p>
        CAKE FLAVORS: <br></br>Vanilla<br></br> Chocolate<br></br>Confetti
        <br></br>Carrot & walnut <br></br> <br></br> FILLING FLAVORS:<br></br>{" "}
        Dulce de Leche <br></br> Chocolate Ganache<br></br>White Chocolate
        Ganache<br></br>
        Cream cheese frosting<br></br>Peanut butter<br></br>Strawberry cream
        <br></br>Walnut cream<br></br>Lemon cream<br></br>Nutella
      </p>
    </div>
  );
  return (
    <MenuItem
      price={price}
      title="CUSTOM CAKES"
      image={image}
      galleryImg1={img1}
      galleryImg2={img2}
      galleryImg3={img3}
      description={description}
    />
  );
}
