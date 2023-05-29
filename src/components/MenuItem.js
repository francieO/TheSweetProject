import React from "react";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

export default function MenuItem(props) {
  return (
    <div>
      <HeaderLogo />
      <HeaderNav />{" "}
      <section className="menuItemContainer">
        {/* <div className="menuItemImageGallery">
          <img src={props.galleryImg1}></img>
          <img src={props.galleryImg2}></img>
        </div> */}
        <div className="menuItemContainerLeft">
          {" "}
          <img
            className="menuItemMainImage"
            src={props.image}
            alt="cookies"
          ></img>
          <div className="menuItemImageGallery">
            <img src={props.galleryImg1} alt="cookie 1"></img>
            <img src={props.galleryImg2} alt="cookie 2"></img>
            <img src={props.galleryImg3} alt="cookie 3"></img>
          </div>
          <div className="menuItemLeftButtonsContainer">
            <button>GALLERY</button>
            <button>INSTAGRAM</button>
          </div>
        </div>
        <div className="menuItemContainerRight">
          <h1>{props.title}</h1>
          <p className="price">{props.price}</p>
          <p>{props.description}</p>
          <Link to="/order">
            {" "}
            <button>PLACE ORDER</button>{" "}
          </Link>
        </div>
      </section>
      {/* <div className="seeMore">
        {" "}
        <button>Gallery</button>
        <button>INSTAGRAM</button>
      </div> */}
    </div>
  );
}
