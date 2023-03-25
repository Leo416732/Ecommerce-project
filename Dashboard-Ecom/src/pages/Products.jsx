import "../styles/products.css";
import { Button } from "react-bootstrap";
import ProductCanvas from "../components/sub/ProductCanvas";
import Product from "./Product";
import Pagination from "../components/sub/Pagination";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductProvider";
import CategoryCanvas from "../components/sub/CategoryCanvas";
import axios from "axios";

export default function Products() {
  const { data, handleShow } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState();
  const pageNum = useParams();
  const number = pageNum.id;

  const [show, setShow] = useState(false);
  const handleCloseCate = () => setShow(false);
  const handleShowCate = () => setShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:2020/categoryGet")
      .then((cate) => setCategories(cate.data));
  }, []);

  function selectCate(name) {
    if (name == "all") {
      setProducts();
    } else {
      let filterProduct =
        data &&
        data.filter(
          (prod) => prod.category.name.toLowerCase() === name.toLowerCase()
        );
      setProducts(filterProduct);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
          className="dashboard-button-image"
          src="https://cdn-icons-png.flaticon.com/512/2783/2783301.png"
          alt=""
        />
        <p>Products</p>
      </div>
      <div>
        <Button
          className="add-product-button"
          variant="primary"
          onClick={handleShow}
        >
          + Бараа нэмэх
        </Button>

        <ProductCanvas categories={categories} />
        <CategoryCanvas
          handleShowCate={handleShowCate}
          handleCloseCate={handleCloseCate}
          show={show}
        />
      </div>
      <button className="none" onClick={handleShowCate}>
        + Category нэмэх
      </button>

      <div className="products-title">
        <select name="" onChange={(e) => selectCate(e.target.value)}>
          <option value="all">All</option>
          {categories &&
            categories.map((cate, i) => (
              <option key={i} value={cate.name}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="product-container">
        <div className="product-title">
          <p className="product-image">Зураг</p>
          <p className="product-name">Барааны нэр</p>
          <p className="product-price">Үнэ</p>
          <p className="product-stock">Үлдэгдэл</p>
          <p className="product-sale">Хямдрал</p>
          <p className="product-categ">Категори</p>
        </div>
        <div>
          {(products ? products : data)
            .slice(0 + 8 * (number - 1), 8 + 8 * (number - 1))
            .map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
      <div>
        <Pagination length={products ? products.length : data.length} />
      </div>
    </div>
  );
}
