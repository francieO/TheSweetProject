import React from "react";
import MenuItem from "../../components/MenuItem";
import largeCookiesimg from "../../images/large-cookies.jpeg";
import img1 from "../../images/gallery/IMG_6360.jpeg";
import img2 from "../../images/gallery/IMG_6445.jpg";
import img3 from "../../images/gallery/IMG_6450.jpg";

const description = (
  <div>
    {" "}
    <p>Choice of chocolate or vanilla cookie</p>
    <p>Wrapped in cellophane bag</p>
    <p>Add ribbon and a tag for $1</p>
  </div>
);
export default function Cookies() {
  return (
    <div>
      <MenuItem
        title="Custom Cookies"
        price="Starting at $5 each (minimum one dozen)"
        description={description}
        image={largeCookiesimg}
        galleryImg1={img1}
        galleryImg2={img2}
        galleryImg3={img3}
      />
    </div>
  );
}
