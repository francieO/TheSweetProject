import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/cupcakes.jpeg";
import img1 from "../../images/gallery/8 (1).jpg";

export default function Cupcakes() {
  const price = <div>Starting at $3 each (minimum one dozen)</div>;
  const description = (
    <div>
      <p>
        CAKE FLAVORS: Vanilla or Chocolate <br></br> <br></br>FROSTING:
        Buttercream <br></br> <br></br>FILLING FLAVORS: Dulce de Leche or
        Chocolate Ganache
      </p>
    </div>
  );
  return (
    <MenuItem
      title="CUPCAKES"
      price={price}
      description={description}
      image={mainImage}
      galleryImg1={img1}
    />
  );
}
