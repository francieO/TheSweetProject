import React from "react";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import Footer from "./Footer";

export default function MenuItem(props) {
  const [mainImageSrc, setMainImageSrc] = React.useState(props.image);

  function handleImageClick(newImageSrc) {
    setMainImageSrc(newImageSrc);
  }

  return (
    <div>
      <HeaderLogo />
      <HeaderNav />{" "}
      <section className="menuItemContainer">
        <div className="menuItemContainerLeft">
          {" "}
          <img
            className="menuItemMainImage"
            src={mainImageSrc}
            alt="cookies"
          ></img>
          <div className="menuItemImageGallery">
            {props.galleryImg1 && mainImageSrc !== props.galleryImg1 && (
              <img
                src={props.galleryImg1}
                onClick={() => handleImageClick(props.galleryImg1)}
                alt="sweets"
              ></img>
            )}
            {props.galleryImg2 && mainImageSrc !== props.galleryImg2 && (
              <img
                src={props.galleryImg2}
                onClick={() => handleImageClick(props.galleryImg2)}
                alt="sweets"
              ></img>
            )}

            {props.galleryImg3 && mainImageSrc !== props.galleryImg3 && (
              <img
                src={props.galleryImg3}
                onClick={() => handleImageClick(props.galleryImg3)}
                alt="sweets"
              ></img>
            )}
            {mainImageSrc !== props.image && (
              <img
                src={props.image}
                onClick={() => handleImageClick(props.image)}
                alt="sweets"
              ></img>
            )}
          </div>
          <p style={{ textAlign: "center", marginBottom: "0" }}>See More:</p>
          <div className="menuItemLeftButtonsContainer">
            <Link to="/order">
              <button>GALLERY</button>
            </Link>

            <a
              href="https://www.instagram.com/the.sweet.project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button>INSTAGRAM</button>
            </a>
          </div>
        </div>
        <div className="menuItemContainerRight">
          <h1>{props.title}</h1>
          <div className="price">{props.price}</div>
          <div className="menuIDescription">{props.description}</div>
          <Link to="/order">
            {" "}
            <button>PLACE ORDER</button>{" "}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
