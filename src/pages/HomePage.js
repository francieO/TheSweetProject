import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import HeaderLogo from "../components/HeaderLogo";
import ImageCarousel from "../components/ImageCarousel";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";

const images = [img1, img2, img3];

export default function HomePage() {
  return (
    <div>
      <HeaderLogo />
      <HeaderNav />
      <ImageCarousel interval="3000" images={images} />
      <section className="heroSection">
        <h1>Handmade. Custom. Delicious.</h1>
        <br />
        <p>LOCAL DELIVERY AVAILABLE IN THE TRIANGLE AREA</p>
        <br />
        <Link to="/order">
          <button className="heroOrderButton">PLACE ORDER</button>
        </Link>
        <p>or</p>
        <a href="https://www.instagram.com/the.sweet.project/">
          <button className="heroMessageButton">
            MESSAGE ME ON INSTAGRAM!
          </button>
        </a>
      </section>
    </div>
  );
}
