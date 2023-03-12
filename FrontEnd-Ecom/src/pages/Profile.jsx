import Products from "./Products";
import SpecialProduct from "../components/sub-component/SpecialProduct";
import "../styles/main.css";
import CarouselProd from "../components/sub-component/CarouselProd";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Profile() {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <CarouselProd />
      <div
        className={
          themeMode == "light" ? "main container light" : "main container dark"
        }
      >
        <Products />
        <div className="main-image">
          <img src="./Group 3.png" alt="" />
        </div>
        <SpecialProduct />
        <div className="d-flex brands">
          <img className="brand" src="./brand-8.png" alt="" />
          <img className="brand" src="./brand-4.png" alt="" />
          <img className="brand" src="./brand-5.png" alt="" />
          <img className="brand" src="./brand-6.png" alt="" />
          <img className="brand" src="./brand-7.png" alt="" />
        </div>
      </div>
    </>
  );
}
