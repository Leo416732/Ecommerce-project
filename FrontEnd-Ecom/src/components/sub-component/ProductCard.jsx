import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../pages/Product";
import { ProductContext } from "../../context/ProductsContext";
import { ThemeContext } from "../../context/Theme";
import { useEffect } from "react";
import "../../styles/productcard.css";

export default function ProductCard() {
  const { data, setCount } = useContext(ProductContext);
  const [x, setX] = useState(1);

  const { themeMode } = useContext(ThemeContext);
  const param = useParams();
  const navigate = useNavigate();

  //main product
  let productDeatail = data && data.find((prod) => prod._id === param.id);
  const [stock, setStock] = useState(
    (prev) => prev == undefined && localStorage.getItem("a")
  );

  useEffect(() => {
    if (localStorage.getItem("baskets")) {
      let baskets = JSON.parse(localStorage.getItem("baskets"));
      let item = baskets.find((prod) => {
        return prod._id === param.id;
      });

      item && setStock(productDeatail?.stock - item.stock);
    }
  }, [param, localStorage.getItem("baskets")]);

  //count add .
  function addCount() {
    x < productDeatail.stock && setX(x + 1);
  }

  //count minus
  function minusCount() {
    if (x > 0) {
      setX(x - 1);
    }
  }
  //min products
  let subProducts =
    data &&
    data.filter(
      (subProd) =>
        subProd.category.name === productDeatail.category.name &&
        subProd._id !== productDeatail._id
    );

  //basket add handler
  function addBasket() {
    if (stock < 4) {
    } else {
      setCount((prev) => prev + 1);
      let baskets = [];
      setX(0);

      //basket add id and stock
      if (localStorage.getItem("baskets")) {
        baskets = JSON.parse(localStorage.getItem("baskets"));
        //find product
        const findData = baskets.find(
          (product) => product._id === productDeatail._id
        );

        if (findData && findData.stock < productDeatail.stock) {
          baskets[baskets.indexOf(findData)].stock =
            baskets[baskets.indexOf(findData)].stock + x;
          baskets = [...baskets];
        } else {
          baskets = [...baskets, { _id: productDeatail._id, stock: x }];
        }
      } else {
        baskets = [...baskets, { _id: productDeatail._id, stock: x }];
      }
      localStorage.setItem("baskets", JSON.stringify(baskets));
    }
  }

  return (
    <>
      <div className="oneProduct">
        <div className="product container d-flex">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {productDeatail && productDeatail.category.name}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {productDeatail && productDeatail.name}
                </li>
              </ol>
            </nav>
            <img
              className="img"
              src={productDeatail && productDeatail.image}
              alt=""
            />
            <div className="backbtn" onClick={() => navigate(-1)}>
              back
            </div>
          </div>
          <div>
            <div className="spec">
              <h5 className="title">{productDeatail && productDeatail.name}</h5>
              <h5 className="price">
                ${productDeatail && productDeatail.price}
              </h5>
              <p className="stock">
                Hurry up! only {stock} product left in stock!
              </p>
            </div>
            <div className="second mt-2">
              <p className="sale">
                Sale: {productDeatail && productDeatail.sale}%
              </p>
              <p className="quant">
                Quantity:
                <button className="trans add" onClick={minusCount}>
                  -
                </button>
                <input
                  onChange={(e) => setX(Number(e.target.value))}
                  className="x"
                  value={productDeatail && x <= productDeatail.stock ? x : 0}
                />
                <button className="trans" onClick={addCount}>
                  +
                </button>
              </p>
              <button
                onClick={addBasket}
                className={themeMode == "light" ? "buy" : "buyDark"}
              >
                Add to card
              </button>
              <button
                onClick={addBasket}
                className={themeMode == "light" ? "buy now" : "buyDark now"}
              >
                Buy it now
              </button>
            </div>
            <div className="third">
              {productDeatail &&
                productDeatail.spec.map((one, index) => (
                  <div className="text-dark" key={index}>
                    <div className="d-flex">
                      <p className="keys">{Object.keys(one)[0]}</p>:
                      <p className="values">{Object.values(one)[0]}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="section container mb-5">
          <p>
            <a
              className="btn coll"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Description
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card-body">
              {productDeatail && productDeatail.description}
            </div>
          </div>
        </div>
        <div className="min-pro container">
          {subProducts &&
            subProducts
              .slice(0, 4)
              .map((e, index) => <Product product={e} key={index} />)}
        </div>
      </div>
    </>
  );
}
