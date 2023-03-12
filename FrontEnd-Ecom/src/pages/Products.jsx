import Product from "./Product";
import "../styles/products.css";
import { Categories } from "../util/category";
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import { ThemeContext } from "../context/Theme";
import { useEffect } from "react";

export default function Products() {
  const { data } = useContext(ProductContext);
  const { themeMode } = useContext(ThemeContext);
  let currentBtn = localStorage.getItem("currentBtn");
  const prod =
    data &&
    data.filter((name) => name.category.includes(currentBtn.toLowerCase()));
  const [products, setProducts] = useState(
    currentBtn && currentBtn == "all" ? data && data : prod && prod
  );
  const [activeBtn, setActiveBtn] = useState(currentBtn && currentBtn);

  useEffect(() => {
    if (currentBtn) {
      if (currentBtn == "all") {
        setProducts(data);
      } else {
        const prod =
          data &&
          data.filter((name) =>
            name.category.includes(currentBtn.toLowerCase())
          );
        setProducts(prod);
      }
    }
  }, [currentBtn || activeBtn == currentBtn]);

  function filterProdHandle(category) {
    if (category.name === "All") {
      setProducts(data);
    } else {
      setProducts(prod);
    }
    setActiveBtn(category.val);
    localStorage.setItem("currentBtn", category.val);
  }

  return (
    <div className={themeMode == "light" ? "light" : "dark"}>
      <div className="nav container">
        <p className="nav-title">Populer product</p>
        {Categories.map((category, index) => {
          return (
            <div className="buttons" key={index}>
              <button
                className={activeBtn === category.val ? "Active" : "inactive"}
                onClick={() => filterProdHandle(category)}
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
