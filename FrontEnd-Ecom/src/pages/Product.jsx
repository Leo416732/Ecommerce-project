import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme";
import "../styles/product.css";

export default function Product(prop) {
  const navigate = useNavigate();
  const { product } = prop;
  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      className={themeMode == "light" ? "cardLight card" : "cardDark card"}
      onClick={() => {
        navigate(`../product/${product._id}`);
      }}
    >
      <img className="card-image" src={product && product.image} alt="" />
      <h5 className="card-title">{product && product.name}</h5>
      <span className="card-text">${product && product.price}</span>
      <a href="">
        <div className="card-round">
          <img
            className="round-icon"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt=""
          />
        </div>
      </a>
    </div>
  );
}
