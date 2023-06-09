import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();

export default function Handlers({ children }) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState();
  const [edit, setedit] = useState(false);
  const [isAction, setIsAction] = useState(2);
  const [getSpec, setSpec] = useState([]);

  const handleClose = () => setShow(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function handleShow(product) {
    setShow(true);
    if (product) {
      setEditProduct(product);
      setSpec(product.spec);
    }
  }
  function deleteHandler(id) {
    axios
      .post(`http://localhost:2020/productDel?id=${id}`, {
        role: `${user && user.role}`,
      })
      .then((res) => res.statusText === "OK" && alert("delete"));
    setIsAction(isAction + 1);
  }
  useEffect(() => {
    axios
      .get("http://localhost:2020/productsGet")
      .then((products) => setData(products.data));
  }, [isAction]);

  return (
    <ProductsContext.Provider
      value={{
        setSpec,
        getSpec,
        data,
        setData,
        handleClose,
        handleShow,
        show,
        edit,
        deleteHandler,
        setedit,
        editProduct,
        setIsAction,
        isAction,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
