import { useContext } from "react";
import { ProductsContext } from "../context/ProductProvider";
import Dots from "../components/icon/Dots";

export default function Product(prop) {
  const { product } = prop;
  const { handleShow, setedit, deleteHandler } = useContext(ProductsContext);
  return (
    <div className="product">
      <img
        className="product-image"
        src={product && product.image}
        alt="product image"
      />
      <p className="product-name">{product && product.name}</p>
      <p className="product-price">${product && product.price}</p>
      <p className="product-stock">{product && product.stock}</p>
      <p className="product-sale">{product && product.sale}%</p>
      <p className="product-category">{product && product.category.name}</p>
      <div className="product-edit">
        <div className="dropdown">
          <button
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Dots />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => (handleShow(product), setedit(true))}
              >
                Өөрчлөх
              </a>
            </li>
            <li>
              <a
                onClick={(product) => deleteHandler(product.target.name)}
                className="dropdown-item"
                name={product && product._id}
              >
                Устгах
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Вебсайтаас нуух
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
