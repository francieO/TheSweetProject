import React from "react";
import HeaderNav from "../../components/HeaderNav";
import HeaderLogo from "../../components/HeaderLogo";
import customCookiesImg from "../../images/cookies.jpeg";
import miniCookiesImg from "../../images/3.jpeg";
import oreosImage from "../../images/oreos.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export default function CustomCookies() {
  return (
    <div>
      <HeaderLogo />
      <HeaderNav />
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>CUSTOM COOKIES</h1>
      <section className="customCookiesContainer">
        <div className="collectionContainer">
          <div className="collection">
            <img src={customCookiesImg} alt="" />
            <Link to="/menu/cookies">
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
            <img src={miniCookiesImg} alt="" />
            <Link to="/menu/miniCookieJar">
              <span className="collectionOverlay">
                <h1 className="labelPreload">DECORATED MINI COOKIE JAR</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
          <div className="collection">
            <img src={oreosImage} alt="" />
            <Link to="/menu/decoratedOreos">
              <span className="collectionOverlay">
                <h1 className="labelPreload">DECORATED OREOS</h1>
                <span className="browse">BROWSE</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
