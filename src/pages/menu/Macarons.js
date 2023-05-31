import React from "react";
import MenuItem from "../../components/MenuItem";
import mainImage from "../../images/macarons.jpeg";
import img1 from "../../images/gallery/IMG_6366.jpeg";
import img2 from "../../images/gallery/IMG_6378.jpeg";
import img3 from "../../images/gallery/IMG_6383.jpeg";

const description = (
  <div>
    {" "}
    <p>
      Chocolate & Chocolate Chips <br></br> White Chocolate & White Chocolate
      Chips <br></br>
      Nutella & Chocolate <br></br>Lemon <br></br> Walnut <br></br> Strawberry{" "}
      <br></br> Coconut <br></br> Nutella & Chocolate <br></br>
      Dulce de Leche <br></br>Peanut Butter <br></br> White chocolate &
      Raspberry Jam
    </p>
  </div>
);

const price = (
  <div>
    6 for $12 - 2 colors, 1 flavor <br></br>12 for $22 - 2 colors, 2 flavors{" "}
    <br></br>20 for $35 - 4 colors, 3 flavors <br></br>35 for $65 - 5 colors, 4
    flavors
  </div>
);
export default function Cookies() {
  return (
    <div>
      <MenuItem
        title="Macarons"
        price={price}
        description={description}
        image={mainImage}
        galleryImg1={img1}
        galleryImg2={img2}
        galleryImg3={img3}
      />
    </div>
  );
}
