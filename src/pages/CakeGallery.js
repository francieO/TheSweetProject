import React, { useState } from "react";
import img1 from "../images/gallery/16.jpeg";
import img2 from "../images/gallery/IMG_6369.jpeg";
import img3 from "../images/gallery/IMG_6398.jpeg";
import img4 from "../images/gallery/IMG_6402.jpeg";
import img5 from "../images/gallery/IMG_6405.jpeg";
import img6 from "../images/gallery/IMG_6433.jpg";
import img7 from "../images/gallery/IMG_6436.jpg";
import img8 from "../images/gallery/IMG_6439.jpg";
import img9 from "../images/gallery/IMG_6441.jpg";

import HeaderLogo from "../components/HeaderLogo";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function CakeGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const handleImageClick = (src) => {
    setActiveImage(src);
    setIsOpen(true);
    console.log(isOpen, activeImage);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const imgElements = imgArray.map((img) => {
    return (
      <div className="image">
        <img
          src={img}
          alt="Cake Gallery"
          onClick={() => handleImageClick(img)}
        ></img>
      </div>
    );
  });

  return (
    <div>
      <HeaderLogo />
      <HeaderNav />
      <div className="galleryContainer">
        <h1 className="title">Cake Gallery</h1>
        <div className="imageContainer"> {imgElements}</div>

        {/* Image popup */}
        {isOpen && (
          <div className="popupImage">
            <img src={activeImage} alt="Popup" />
            <span onClick={handleClose}>&times;</span>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
