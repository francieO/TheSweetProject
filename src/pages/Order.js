import React from "react";
import HeaderNav from "../components/HeaderNav";
import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Footer";

export default function Order() {
  return (
    <div>
      <HeaderLogo />
      <HeaderNav />
      <section className="contactContainer">
        <h1 className="title">Ordering</h1>
        <p>
          {" "}
          Please contact me by phone, text, or whatsapp :
          <a href="tel:3476364552"> 347-636-4552.</a> I will try to respond in
          the next 48 hours with your price quote. Orders will not be booked
          until they are paid in full or a 50% deposit has been made. Remaining
          balance must be paid the day of delivery. <br></br>
          <br></br>{" "}
          <span>
            **Unfortunately I cannot provide nut-free, sugar free, or gluten
            free products.
          </span>
        </p>
        <h1 className="title">Refunds & Cancellations</h1>
        <p>
          I am able to refund and cancel your order up to 14 days prior to your
          pickup date. No refunds will be given for any products that have
          already been made.{" "}
        </p>

        <h1 className="title">Pickup & Delivery</h1>
        <p>
          {" "}
          My products are for local pickup in Cary NC. Delivery available in the
          triangle area (Raleigh-Durham and Chapel Hill). Shipping available for
          cookies only, within the US.
        </p>

        <div className="contact-method">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:3476364552"> 347-636-4552</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
