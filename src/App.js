import React from "react";
import "./App.css";
// import HeaderNav from "./components/HeaderNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Order from "./pages/Order";
import Cookies from "./pages/menu/Cookies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/order" element={<Order />} />
      <Route path="/menu/cookies" element={<Cookies />} />
    </Routes>
  );
}

export default App;
