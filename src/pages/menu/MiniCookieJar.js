import React from "react";
import MenuItem from "../../components/MenuItem";
import miniCookies from "../../images/3.jpeg";
import img1 from "../../images/miniCookies.jpeg";
import img2 from "../../images/gallery/IMG_6361.jpeg";

export default function MiniCookieJar() {
  const price = "Small Jar $15 Large Jar $35";

  const title = <h1>DECORATED MINI COOKIES</h1>;
  const description = (
    <div>
      <p>Choice of chocolate or vanilla cookie</p>
      <p>Decorated with royal icing</p>
    </div>
  );
  return (
    <div>
      {" "}
      <MenuItem
        image={miniCookies}
        galleryImg1={img1}
        galleryImg2={img2}
        price={price}
        title={title}
        description={description}
      />
    </div>
  );
}
