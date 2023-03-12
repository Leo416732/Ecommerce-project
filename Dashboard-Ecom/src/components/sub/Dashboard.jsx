import { useContext } from "react";
import "../../styles/dashBoard.css";
import { ProductsContext } from "../../context/ProductProvider";

export default function Dashboard() {
  const { data } = useContext(ProductsContext);
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
          className="dashboard-button-image"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177243.png"
          alt=""
        />
        <p>DashBoard</p>
      </div>
      <div className="dashboard-products-container">
        <div className="dashboard-products-title">
          <img src="../layers.svg" alt="" />
          <p>Сүүлд зарагдсан</p>
        </div>
        <div className="dashboard-products">
          {data.slice(0, 6).map((e, index) => {
            return (
              <div className="dashboard-product" key={index}>
                <img
                  className="dashboard-product-image"
                  src={e.image}
                  alt="product image"
                />
                <p className="dashboard-product-name">{e.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
