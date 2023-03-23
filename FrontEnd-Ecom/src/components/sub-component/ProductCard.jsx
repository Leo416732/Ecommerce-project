import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../pages/Product";
import { ProductContext } from "../../context/ProductsContext";
import "../../styles/productcard.css";
import { ThemeContext } from "../../context/Theme";

export default function ProductCard() {
  const { data, setCount } = useContext(ProductContext);
  const [x, setX] = useState(1);
  const navigate = useNavigate();
  const test = useParams();
  const { themeMode } = useContext(ThemeContext);

  let productDeatail = data && data.filter((prod) => prod._id === test.id);

  function addCount() {
    if (x < productDeatail[0].stock) {
      setX(x + 1);
    }
  }
  function minusCount() {
    if (x > 0) {
      setX(x - 1);
    }
  }
  let minPro =
    data &&
    data.filter(
      (subProd) =>
        subProd.category === productDeatail[0].category &&
        subProd.id !== productDeatail[0].id
    );
  function addCard() {
    setCount((prev) => prev + 1);
    let baskets = [];
    setX(0);
    if (localStorage.getItem("baskets")) {
      baskets = JSON.parse(localStorage.getItem("baskets"));
      const findData = baskets.find(
        (product) => product._id === productDeatail[0]._id
      );
      if (findData) {
        baskets[baskets.indexOf(findData)].stock =
          baskets[baskets.indexOf(findData)].stock + x;
        baskets = [...baskets];
      } else {
        baskets = [...baskets, { _id: productDeatail[0]._id, stock: x }];
      }
    } else {
      baskets = [...baskets, { _id: productDeatail[0]._id, stock: x }];
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
  }
  return (
    <>
      <div className="oneProduct">
        <div className="product container d-flex">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">
                  <a href="/profile">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {productDeatail && productDeatail[0].category.name}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {productDeatail && productDeatail[0].name}
                </li>
              </ol>
            </nav>
            <img
              className="img"
              src={productDeatail && productDeatail[0].image}
              alt=""
            />
            <div className="backbtn" onClick={() => navigate(-1)}>
              back
            </div>
          </div>
          <div>
            <div className="spec">
              <h5 className="title">
                {productDeatail && productDeatail[0].name}
              </h5>
              <h5 className="price">
                ${productDeatail && productDeatail[0].price}
              </h5>
              <p className="stock">
                Hurry up! only {productDeatail && productDeatail[0].stock}{" "}
                product left in stock!
              </p>
            </div>
            <div className="second mt-2">
              <p className="sale">
                Sale: {productDeatail && productDeatail[0].sale}%
              </p>
              <p className="quant">
                Quantity:
                <button className="trans add" onClick={minusCount}>
                  -
                </button>
                <input
                  onChange={(e) => setX(Number(e.target.value))}
                  className="x"
                  value={productDeatail && x <= productDeatail[0].stock ? x : 0}
                />
                <button className="trans" onClick={addCount}>
                  +
                </button>
              </p>
              <button
                onClick={addCard}
                className={themeMode == "light" ? "buy" : "buyDark"}
              >
                Add to card
              </button>
              <button
                onClick={addCard}
                className={themeMode == "light" ? "buy now" : "buyDark now"}
              >
                Buy it now
              </button>
            </div>
            <div className="third">
              {productDeatail &&
                productDeatail[0].spec.map((one, index) => (
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
              {productDeatail && productDeatail[0].description}
            </div>
          </div>
        </div>
        <div className="min-pro container">
          {minPro &&
            minPro
              .slice(0, 4)
              .map((e, index) => <Product product={e} key={index} />)}
        </div>
      </div>
    </>
  );
}
