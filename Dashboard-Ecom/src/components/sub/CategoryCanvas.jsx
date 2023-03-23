import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function CategoryCanvas(prop) {
  const { handleShowCate, handleCloseCate, show } = prop;
  const [name, setName] = useState();
  function saveCate() {
    name &&
      axios
        .post(`http://localhost:2020/category`, { name })
        .then((res) => console.log(res));
    handleCloseCate;
  }
  return (
    <>
      <Modal show={show} onHide={handleShowCate}>
        <Modal.Header closeButton onClick={handleCloseCate}>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveCate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
