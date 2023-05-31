import React from "react";
import "./App.css";
// import HeaderNav from "./components/HeaderNav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Order from "./pages/Order";
import Cookies from "./pages/menu/Cookies";
import CustomCookies from "./pages/menu/CustomCookies";
import MiniCookieJar from "./pages/menu/MiniCookieJar";
import DecoratedOreos from "./pages/menu/DecoratedOreos";
import Macarons from "./pages/menu/Macarons";
import Brigadeiros from "./pages/menu/Brigadeiros";
import Cupcakes from "./pages/menu/Cupcakes";
import Cakecicles from "./pages/menu/Cakecicles";
import Cakepops from "./pages/menu/Cakepops";
import ArtesenalCookieJars from "./pages/menu/ArtesenalCookieJars";
import Cakes from "./pages/menu/Cakes";
import SweetGallery from "./pages/SweetGallery";
import CakeGallery from "./pages/CakeGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/order" element={<Order />} />
      <Route path="/menu/cookies" element={<Cookies />} />
      <Route path="/menu/customCookies" element={<CustomCookies />} />
      <Route path="/menu/miniCookieJar" element={<MiniCookieJar />} />
      <Route path="/menu/decoratedOreos" element={<DecoratedOreos />} />
      <Route path="/menu/macarons" element={<Macarons />} />
      <Route path="/menu/brigadeiros" element={<Brigadeiros />} />
      <Route path="/menu/cupcakes" element={<Cupcakes />} />
      <Route path="/menu/cakecicles" element={<Cakecicles />} />
      <Route path="/menu/cakepops" element={<Cakepops />} />
      <Route path="/menu/sweet-gallery" element={<SweetGallery />} />
      <Route path="/menu/cake-gallery" element={<CakeGallery />} />
      <Route
        path="/menu/artesenalcookiejars"
        element={<ArtesenalCookieJars />}
      />
      <Route path="/menu/cakes" element={<Cakes />} />
    </Routes>
  );
}

export default App;
