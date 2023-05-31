import React from "react";
import logo from "../images/logotspfull.png";

export default function HeaderLogo() {
  return (
    <div className="logoContainerMain">
      <img src={logo} alt="Logo" style={{ width: "150px" }} />
    </div>
  );
}
