import Product from "./Product";
import "../style/products.css";
import { Categories } from "../util/data";
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import { ThemeContext } from "../context/Theme";

export default function Products() {
  const { data } = useContext(ProductContext);
  const [products, setProducts] = useState(data);
  const [activeBtn, setActiveBtn] = useState(
    ""
    // localStorage.getItem("currentBtn") && localStorage.getItem("currentBtn")
  );

  function buttonHandler(category) {
    if (category.name === "All") {
      setProducts(data);
      setActiveBtn(category.val);
    } else {
      const prod =
        data &&
        data.filter(
          (name) => name.category.includes(category.name.toLowerCase()),
          setActiveBtn(category.val)
        );
      setProducts(prod);
    }
    // localStorage.setItem("currentBtn", category.val);
  }

  const { themeMode } = useContext(ThemeContext);
  return (
    <div className={themeMode == "light" ? "light" : "dark"}>
      <div className="nav container">
        <p className="nav-title">Populer product</p>
        {Categories.map((category, index) => {
          return (
            <div className="buttons" key={index}>
              <button
                className={activeBtn === category.val ? "Active" : "inactive"}
                onClick={() => buttonHandler(category)}
              >
                {category.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="products">
        {products &&
          products.map((pro, index) => <Product product={pro} key={index} />)}
      </div>
    </div>
  );
}
