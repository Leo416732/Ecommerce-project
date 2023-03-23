import "../styles/products.css";
import { Button } from "react-bootstrap";
import ProductCanvas from "../components/sub/ProductCanvas";
import Product from "./Product";
import Pagination from "../components/sub/Pagination";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductProvider";
import Test from "../components/sub/Test";

export default function Products() {
  const { data, handleShow } = useContext(ProductsContext);
  const pageNum = useParams();
  const number = pageNum.id;

  const [show, setShow] = useState(false);
  const handleCloseCate = () => setShow(false);
  const handleShowCate = () => setShow(true);

  function categoryAdd() {
    console.log();
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
        <Button
          className="add-product-button"
          variant="primary"
          onClick={handleShowCate}
        >
          + Category нэмэх
        </Button>
        <ProductCanvas />
        <Test
          handleShowCate={handleShowCate}
          handleCloseCate={handleCloseCate}
          show={show}
        />
      </div>

      <div className="products-title">
        <div>
          <img src="../correct.svg" alt="" /> Бүгд
        </div>
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
          {data &&
            data
              .slice(0 + 8 * (number - 1), 8 + 8 * (number - 1))
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
