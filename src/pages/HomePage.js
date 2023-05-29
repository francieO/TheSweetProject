import React from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import HeaderLogo from "../components/HeaderLogo";
import ImageCarousel from "../components/ImageCarousel";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import cookiesImg from "../images/large-cookies.jpeg";
import macaronsImg from "../images/macarons.jpeg";
import brigadeirosImg from "../images/brigadeiros.jpeg";
import cakeImg from "../images/cakes.jpeg";
import cupcakeImg from "../images/cupcakes.jpeg";
import cakeciclesImg from "../images/cakecicles.jpeg";
import cakepopImg from "../images/cakepops.jpeg";
import artesanalCookieImg from "../images/3.jpeg";

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

      <section className="home-menu">
        <div className="collectionContainer">
          <div className="collection">
            <img src={cookiesImg} alt="" />
            <Link to="/menu-items/cookies">
              <span className="collectionOverlay">
                <h1 className="labelPreload">
                  CUSTOM
                  <br />
                  COOKIES
                </h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div className="collection">
            <img src={macaronsImg} alt="" />
            <Link to="/menu-items/macarons">
              <span className="collectionOverlay">
                <h1 className="labelPreload">MACARONS</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div className="collection">
            <img src={brigadeirosImg} alt="" />
            <Link to="/menu-items/brigadeiros">
              <span className="collectionOverlay">
                <h1 className="labelPreload">BRIGADEIROS</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div class="collection">
            <img src={cakeImg} alt="" />
            <Link to="/menu-items/cakes">
              <span className="collectionOverlay">
                <h1 className="labelPreload">CAKES</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div class="collection">
            <img src={cupcakeImg} alt="" />
            <Link to="/menu-items/cupcakes">
              <span className="collectionOverlay">
                <h1 className="labelPreload">CUPCAKES</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div class="collection">
            <img src={cakeciclesImg} alt="" />
            <Link to="/menu-items/cakecicles">
              <span className="collectionOverlay">
                <h1 className="labelPreload">CAKECICLES</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>

          <div class="collection">
            <img src={cakepopImg} alt="" />
            <Link to="/menu-items/cakepops">
              <span className="collectionOverlay">
                <h1 className="labelPreload">CAKEPOPS</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div class="collection">
            <img src={artesanalCookieImg} alt="" />
            <Link to="/menu-items/artesanal">
              <span className="collectionOverlay">
                <h1 className="labelPreload">
                  ARTESANAL <br /> COOKIE JARS
                </h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-links">
          <div class="footer-icons">
            GET IN TOUCH <br />
            <a href="https://www.instagram.com/the.sweet.project/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="tel:3476364552">
              {" "}
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
