import React, { useState } from "react";
import img1 from "../images/gallery/IMG_6452.jpeg";
import img2 from "../images/gallery/IMG_6451.jpg";
import img3 from "../images/gallery/IMG_6450.jpg";
import img4 from "../images/gallery/IMG_6449.jpg";
import img5 from "../images/gallery/IMG_6448.jpg";
import img6 from "../images/gallery/IMG_6447.jpg";
import img7 from "../images/gallery/IMG_6446.jpg";
import img8 from "../images/gallery/IMG_6445.jpg";
import img9 from "../images/gallery/IMG_6444.jpg";
import img10 from "../images/gallery/IMG_6443.jpg";
import img11 from "../images/gallery/IMG_6442.jpeg";
import img12 from "../images/gallery/IMG_6441.jpg";
import img13 from "../images/gallery/IMG_6440.jpg";
import img14 from "../images/gallery/IMG_6439.jpg";
import img15 from "../images/gallery/IMG_6438.jpg";
import img16 from "../images/gallery/IMG_6437.jpg";
import img17 from "../images/gallery/IMG_6436.jpg";
import img18 from "../images/gallery/IMG_6435.jpg";
import img19 from "../images/gallery/IMG_6434.jpg";
import img20 from "../images/gallery/IMG_6433.jpg";
import img21 from "../images/gallery/IMG_6418.jpeg";
import img22 from "../images/gallery/IMG_6417.jpeg";
import img23 from "../images/gallery/IMG_6416.jpeg";
import img24 from "../images/gallery/IMG_6415.jpeg";
import img25 from "../images/gallery/IMG_6414.jpeg";
import img26 from "../images/gallery/IMG_6413.jpeg";
import img27 from "../images/gallery/IMG_6412.jpeg";
import img28 from "../images/gallery/IMG_6411.jpeg";
import img29 from "../images/gallery/IMG_6410.jpeg";
import img30 from "../images/gallery/IMG_6409.jpeg";
import img31 from "../images/gallery/IMG_6408.jpeg";
import img32 from "../images/gallery/IMG_6407.jpeg";
import img33 from "../images/gallery/IMG_6406.jpeg";
import img34 from "../images/gallery/IMG_6405.jpeg";
import img35 from "../images/gallery/IMG_6402.jpeg";
import img36 from "../images/gallery/IMG_6401.jpeg";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

export default function SweetGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
  ];

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
          alt="Sweet Gallery"
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
        <h1>Sweet Gallery</h1>
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
