import React from "react";
import MenuItem from "../../components/MenuItem";
import image from "../../images/artesan.jpeg";
import img1 from "../../images/artesanredvelvet.jpeg";
import img2 from "../../images/artesanchocolatechip.jpeg";
import img3 from "../../images/artesanwalnut.jpeg";

export default function ArtesenalCookieJars() {
  const price = (
    <div>
      Large jar $30 <br></br>Small jar $10
    </div>
  );
  const description = (
    <div>
      <p>
        Red Velvet <br></br> Chocolate <br></br> Walnut <br></br>Butter
      </p>
    </div>
  );
  return (
    <MenuItem
      price={price}
      title="ARTESENAL COOKIE JARS"
      image={image}
      galleryImg1={img1}
      galleryImg2={img2}
      galleryImg3={img3}
      description={description}
    />
  );
}
