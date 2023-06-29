import React from "react";
import logo from "../images/logotspfull.png";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <div className="logoContainerMain">
      <Link to="/">
        {" "}
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}
