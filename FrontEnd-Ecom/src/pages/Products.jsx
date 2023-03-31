import Product from "./Product";
import "../styles/products.css";
import { useState, useContext, useRef } from "react";
import { ProductContext } from "../context/ProductsContext";
import { ThemeContext } from "../context/Theme";
import { useEffect } from "react";
import axios from "axios";

export default function Products() {
  const { data } = useContext(ProductContext);
  const { themeMode } = useContext(ThemeContext);
  const ref = useRef(null);

  let currentBtn =
    localStorage.getItem("currentBtn") === "all"
      ? localStorage.getItem("currentBtn")
      : JSON.parse(localStorage.getItem("currentBtn"));
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [activeBtn, setActiveBtn] = useState(
    !currentBtn || currentBtn == "all" ? "all" : currentBtn.name
  );

  useEffect(() => {
    axios
      .get("http://localhost:2020/categoryGet")
      .then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (currentBtn) {
      if (currentBtn == "all") {
        setProducts(data);
      } else {
        const prod =
          data &&
          data.filter((product) => product.category._id === currentBtn._id);
        setProducts(prod);
      }
    } else {
      localStorage.setItem("currentBtn", "all");
    }
  }, [activeBtn == currentBtn, data, activeBtn]);

  //filter product handler
  function filterProd(category) {
    setActiveBtn(category == "all" ? category : category.name);
    localStorage.setItem("currentBtn", JSON.stringify(category));
  }

  return (
    <div className={themeMode == "light" ? "light" : "dark"}>
      <div className="nav container">
        <button
          className={activeBtn === "all" ? "Active" : "inactive"}
          onClick={() => filterProd("all")}
        >
          All
        </button>
        {categories &&
          categories.map((category, index) => {
            return (
              <div className="buttons" key={index}>
                <button
                  className={
                    activeBtn === category.name ? "Active" : "inactive"
                  }
                  onClick={() => filterProd(category)}
                >
                  {category.name}
                </button>
              </div>
            );
          })}
      </div>
      <div className="products" id="products" ref={ref}>
        {products &&
          products.map((pro, index) => <Product product={pro} key={index} />)}
      </div>
    </div>
  );
}
