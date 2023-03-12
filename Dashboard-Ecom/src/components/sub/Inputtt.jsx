import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Inputtt(p) {
  const { getSpec, setSpec } = p;
  const [show, setShow] = useState(false);

  function save(e) {
    e.preventDefault();
    {
      getSpec
        ? setSpec([...getSpec, { [e.target.key.value]: e.target.val.value }])
        : setSpec([{ [e.target.key.value]: e.target.val.value }]);
    }

    handleClose();
  }
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        + Үзүүлэлт нэмэх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={save}>
            <input type="text" name="key" />
            <input type="text" name="val" />
            <button type="submit" className="add-product-button">
              save
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
