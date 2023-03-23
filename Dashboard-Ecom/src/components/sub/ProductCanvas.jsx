import { useContext } from "react";
import Inputtt from "./Inputtt";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
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

  function post(obj, e) {
    let data = new FormData();
    data.append("file", e.target.image.files[0]);
    data.append("newProduct", JSON.stringify(obj));

    axios.post(`http://localhost:2020/productPost`, data);
  }
  function put(obj) {
    axios
      .put(`http://localhost:2020/productPut?name=${editProduct._id}`, obj)
      .then((res) => res.statusText === "OK" && alert("update"));
    setedit(false);
    setIsAction(isAction + 1);
  }
  function productAddHandler(e) {
    e.preventDefault();

    let obj = {
      name: e.target.name.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,
      category: e.target.category.value.toLowerCase(),
      spec: getSpec,
      description: e.target.desc.value,
      role: "admin",
    };

    edit ? put(obj) : post(obj, e);
  }

  function deleteSpecHandle(name) {
    let arr = [];
    getSpec && getSpec.filter((spec, i) => name !== spec && arr.push(spec));
    setSpec(arr);
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
                <label>Барааны зураг</label>
                {/* <img src={editProduct && editProduct.image} /> */}
                <input
                  className="offcanvas-product-image-input"
                  type={"file"}
                  placeholder="Image link"
                  name="image"
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
                        <p onClick={() => deleteSpecHandle(singleProduct)}>
                          <CLose />
                        </p>
                      </div>
                    );
                  })}
                <div className="offcanvas-product-name">
                  <label>Тайлбар</label>
                  <input
                    name="desc"
                    type="text"
                    defaultValue={editProduct && editProduct.description}
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
