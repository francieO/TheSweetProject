import React from "react";
import HeaderNav from "../components/HeaderNav";
import HeaderLogo from "../components/HeaderLogo";
import aboutImg from "../images/about.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <HeaderLogo />
      <HeaderNav />
      <div class="aboutContent">
        <div class="aboutText">
          <h1 className="title">About The Sweet Project</h1>
          <hr />
          <p>
            Hi, my name is Carla Pereira and I am the owner of The Sweet
            Project, a home based cottage food bakery.  <br />
            <br />
            After many attempts, today I can say that baking is my real passion
            and it is what I want to do for many more years. I am from Chile,
            where I started this business in 2012. I lived 2 years in Brazil
            where I acquired new pastry and decoration techniques. I currently
            live in North Carolina, United States. My business has grown a lot
            during these years which makes me very happy and proud, all thanks
            to the support of my family, friends and dear customers. I love
            details and every time I do a job I think about how incredible it is
            to be able to reach so many homes and be part of beautiful moments
            and celebrations.  <br />
            <br />
            Welcome to my Sweet Project and thank you for being part of this
            beautiful business!
          </p>
        </div>

        <img src={aboutImg} alt="" />
      </div>
      <Footer />
    </div>
  );
}
