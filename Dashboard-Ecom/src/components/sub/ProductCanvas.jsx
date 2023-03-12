import { useContext, useState } from "react";
import Inputtt from "./Inputtt";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ProductsContext } from "../../context/ProductProvider";
import "../../styles/offcanvas.css";
import CLose from "../icon/Close";

export default function ProductCanvas() {
  const {
    handleClose,
    editProduct,
    setedit,
    getSpec,
    setSpec,
    show,
    edit,
    setIsAction,
    isAction,
  } = useContext(ProductsContext);

  function post(obj) {
    axios.post("http://localhost:2020/products", obj);
    console.log(isAction);
    setIsAction(isAction + 1);
  }
  function put(obj) {
    axios.put(`http://localhost:2020/products/${editProduct.id}`, obj);
    setedit(false);
    setIsAction(isAction + 1);
  }
  function productAddHandler(e) {
    e.preventDefault();
    let obj = {
      image: e.target.image.value,
      name: e.target.name.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,
      category: e.target.category.value.toLowerCase(),
      spec: getSpec,
      description: e.target.desc.value,
      id: uuidv4(),
    };

    edit ? put(obj) : post(obj);
  }

  return (
    <div>
      <Offcanvas
        className="offcanvas"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header
          className="offcanvas-close-button"
          closeButton
        ></Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <form onSubmit={productAddHandler}>
            <div className="add-product-offcanvas">
              <div className="offcanvas-product-image">
                <label htmlFor="">Барааны зураг</label>
                <input
                  className="offcanvas-product-image-input"
                  type="text"
                  placeholder="Image link"
                  name="image"
                  defaultValue={editProduct && editProduct.image}
                />
              </div>
              <div className="two-option">
                <div className="offcanvas-product-name">
                  <label htmlFor="">Барааны нэр</label>
                  <input
                    className=""
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={editProduct && editProduct.name}
                  />
                </div>
                <div className="offcanvas-product-name">
                  <label htmlFor="">Барааны үнэ (₮)</label>
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    defaultValue={editProduct && editProduct.price}
                  />
                </div>
              </div>
              <div className="two-option">
                <div className="offcanvas-product-name">
                  <label htmlFor="">Хямдрал (%-иар)</label>
                  <input
                    type="number"
                    placeholder="Sale"
                    name="sale"
                    defaultValue={editProduct && editProduct.sale}
                  />
                </div>
                <div className="offcanvas-product-name">
                  <label htmlFor="">Үлдэгдэл</label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    defaultValue={editProduct && editProduct.stock}
                  />
                </div>
              </div>
              <div className="h5">Үзүүлэлтүүд</div>
              <div className="two-option">
                {getSpec &&
                  getSpec.map((singleProduct, index) => {
                    return (
                      <div
                        key={index}
                        className="offcanvas-product-name mb-3 d-flex"
                      >
                        <div>
                          <label>
                            {Object.keys(singleProduct) &&
                              Object.keys(singleProduct)}
                          </label>
                          <input
                            type="text"
                            defaultValue={
                              Object.values(singleProduct) &&
                              Object.values(singleProduct)
                            }
                          />
                        </div>
                        <button>
                          <CLose />
                        </button>
                      </div>
                    );
                  })}
                <div className="offcanvas-product-name">
                  <label>Тайлбар</label>
                  <input
                    name="desc"
                    type="text"
                    placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, officia."
                  />
                </div>
              </div>
              <div>
                <Inputtt getSpec={getSpec} setSpec={setSpec} />
              </div>
              <div className="offcanvas-product-form">
                <label htmlFor="">Категори сонгох</label>
                <select
                  className="offcanvas-product-select"
                  defaultValue={editProduct && editProduct.category}
                  name="category"
                >
                  <option value="Computers & Tablets">
                    Computers & Tablets
                  </option>
                  <option value="Gaming Console">Gaming Console</option>
                  <option value="Telescope">Telescope</option>
                  <option value="Appliances">Appliances</option>
                </select>
              </div>
              <button type="submit" className="add-product-button">
                Хадгалах
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
