import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BasketContext } from "../../context/BasketsContext";
import Next from "../../icons/Next";

export default function Checkout() {
  const {
    checkOutHandle,
    handleCloseModal,
    handleShowModal,
    showModal,
    totalPrice,
  } = useContext(BasketContext);

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
              <select className="select" name="options" id="">
                <option value="khan bank">Khan bank</option>
                <option value="state bank">State bank</option>
                <option value="has bank">Has bank</option>
                <option value="tdb bank">TDB bank</option>
                <option value="golomt bank">Golomt bank</option>
                <option value="most money">Most Money</option>
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