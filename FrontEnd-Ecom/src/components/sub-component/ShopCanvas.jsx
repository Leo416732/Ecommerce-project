import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Checkout from "./Checkout";
import { BasketContext } from "../../context/BasketsContext";
import Basket from "../../icons/Basket";
import CLose from "../../icons/Close";
import Empty from "../../icons/Empty";
import Shop from "../../icons/Shop";
import "../../styles/shopCanvas.css";
import { ThemeContext } from "../../context/Theme";

export default function ShopCanvas() {
  const {
    handleClose,
    deleteProductHandle,
    cardProd,
    handleShow,
    stocks,
    show,
    totalPrice,
  } = useContext(BasketContext);
  let baskets = JSON.parse(localStorage.getItem("baskets"));
  const { themeMode } = useContext(ThemeContext);

  return (
    <>
      <button
        className={
          themeMode == "light" ? "shopbtn headerLight" : "headerDark shopbtn"
        }
        onClick={handleShow}
      >
        <Shop />
        <div
          className={
            themeMode == "light"
              ? "frameLight frame-round"
              : "frame-round frameDark"
          }
        >
          {stocks ? (
            stocks > 99 ? (
              <p className="stocks-many">99+</p>
            ) : (
              stocks
            )
          ) : (
            0
          )}
        </div>
      </button>

      <Offcanvas
        className={
          themeMode == "light" ? "shop-offcanvas light" : "shop-offcanvas dark"
        }
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="canvas-title">
              <Basket />
              <h5>Your basket</h5>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            <div>
              {(!cardProd || cardProd.length == 0) && <Empty />}
              {cardProd &&
                cardProd.map((product, index) => {
                  return (
                    <div className="shop-canvas-prod" key={index}>
                      <img src={product && product.image} />
                      <div className="descr">
                        <p className="name">{product && product.name}</p>
                        <p className="stock">
                          quantity: {baskets && baskets[index].stock}
                        </p>
                        <span className="desc-price">
                          ${product && product.price}
                        </span>
                      </div>
                      <button
                        className="delete-button"
                        onClick={() =>
                          deleteProductHandle(product && product.id)
                        }
                      >
                        <CLose />
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="checkout">
              <div className="total-price">
                <p>Total:</p> <p className="text">${totalPrice}</p>
              </div>
              <Checkout />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
