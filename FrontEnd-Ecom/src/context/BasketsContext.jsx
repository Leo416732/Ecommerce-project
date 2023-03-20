import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductsContext";
export const BasketContext = createContext();

export default function BasketsContext({ children }) {
  const { data, count } = useContext(ProductContext);
  const [stocks, setStocks] = useState();
  const [cardProd, setCardProd] = useState();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  let baskets = JSON.parse(localStorage.getItem("baskets"));
  let stockCount = [];
  let totalPrice = 0;

  cardProd &&
    cardProd.map(
      (product, index) =>
        (totalPrice =
          baskets && totalPrice + product.price * baskets[index].stock)
    );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    localStorage.getItem("currentUser")
      ? setShowModal(true)
      : navigate("/login");
  };

  //shopCanvas product add and delete
  useEffect(() => {
    if (baskets) {
      baskets.forEach((stocks) => {
        return stockCount.push(stocks.stock);
      });
      let allBasketCount =
        stockCount.length >= 1 &&
        stockCount.reduce((prev, curr) => prev + curr);
      setStocks(allBasketCount);
      let filter =
        data &&
        data.filter((product) =>
          baskets.find((findProduct) => findProduct.id === product.id)
        );
      setCardProd(filter);
    }
  }, [count || show]);

  return (
    <BasketContext.Provider
      value={{
        setShowModal,
        cardProd,
        handleClose,
        handleShow,
        stocks,
        baskets,
        show,
        handleCloseModal,
        handleShowModal,
        stocks,
        showModal,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
