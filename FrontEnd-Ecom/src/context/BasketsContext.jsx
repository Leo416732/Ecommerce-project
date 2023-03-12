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
  const { currentUser } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  let baskets = JSON.parse(localStorage.getItem("baskets"));
  let stockCount = [];
  let totalPrice = 0;
  let basketDeatail = [];

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

  function deleteProductHandle(id) {
    let deleteProduct =
      baskets && baskets.filter((delProd) => delProd.id !== id);
    localStorage.setItem("baskets", JSON.stringify(deleteProduct));
    location.reload();
  }

  //checkout server post and stock update
  function checkOutHandle(e) {
    e.preventDefault();
    if (e.target.address.value === "") {
      alert("address is undefined");
    } else if (e.target.phone.value === "") {
      alert("phone is undefined");
    } else {
      setShowModal(false);
      baskets &&
        baskets.map((basketProd) => {
          basketDeatail.push({
            orderId: basketProd.id,
            quentity: basketProd.stock,
          });
        });
      axios.post("http://localhost:2020/orders", {
        address: e.target.address.value,
        orderDeatail: basketDeatail,
        totalPrice,
        cardType: e.target.options.value,
        phone: e.target.phone.value,
        allQuentity: stocks,
        status: false,
        email: currentUser,
      });
    }
    basketDeatail.forEach((basketProduct) => {
      axios.put(`http://localhost:2020/product/${basketProduct.orderId}`, {
        stock: basketProduct.quentity,
      });
    });

    //clear basket
    alert("success");
    setShowModal(false);
    handleClose(false);
    baskets = [];
    localStorage.removeItem("baskets");
    location.reload();
  }
  return (
    <BasketContext.Provider
      value={{
        checkOutHandle,
        cardProd,
        deleteProductHandle,
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
