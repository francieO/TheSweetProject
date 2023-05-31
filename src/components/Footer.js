import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="footer-icons">
          GET IN TOUCH <br />
          <a href="https://www.instagram.com/the.sweet.project/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="tel:3476364552">
            {" "}
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
