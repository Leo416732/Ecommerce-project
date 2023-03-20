import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BasketContext } from "../../context/BasketsContext";
import Next from "../../icons/Next";
import { banks } from "../../util/bank";

export default function Checkout() {
  const {
    setShowModal,
    handleCloseModal,
    handleShowModal,
    showModal,
    totalPrice,
  } = useContext(BasketContext);

  let basketDeatail = [];

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
    <>
      <Button
        variant="primary"
        className="checkout-button"
        onClick={handleShowModal}
      >
        Checkout
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <form onSubmit={checkOutHandle}>
          <Modal.Body className="modal-body">
            <div className="checkout-modal">
              <label className="label" htmlFor="">
                Card type
              </label>
              <select className="select" name="options">
                {banks.map((bank, i) => (
                  <option key={i} value={bank.name}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="">
                Address
              </label>
              <input type="location" name="address" />
            </div>
            <div>
              <label className="label" htmlFor="">
                Phone
              </label>
              <input type="number" name="phone" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="checkout-button" type="submit" variant="primary">
              <p>${totalPrice}</p>
              <p>
                Buy it now <Next />
              </p>
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
