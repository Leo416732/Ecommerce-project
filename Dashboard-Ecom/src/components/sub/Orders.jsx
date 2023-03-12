import { useContext } from "react";
import { OrderContext } from "../../context/OrderProvider";

export default function Orders() {
  const { ordersList } = useContext(OrderContext);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
          className="dashboard-button-image"
          src="https://cdn-icons-png.flaticon.com/512/839/839860.png"
          alt=""
        />
        <p>Orders</p>
      </div>
      <div className="users-container">
        <div className="user">
          <p className="id">No</p>
          <p className="date">Date</p>
          <p className="phone">Phone</p>
          <p className="email">Email</p>
          <p className="address">Address</p>
          <p className="quentity">Quentity</p>
          <p className="price">Price</p>
          <p className="card-type">Card</p>
          <p className="status">Status</p>
        </div>
        {ordersList &&
          ordersList.map((item, index) => {
            return (
              <div className="user" key={index}>
                <p className="id">#{item && item.orderId}</p>
                <p className="date">{item && item.date}</p>
                <p className="phone">{item && item.phone}</p>
                <p className="email">{item && item.email}</p>
                <p className="address">{item && item.address}</p>
                <p className="quentity">{item && item.allQuentity}</p>
                <p className="price">${item && item.totalPrice}</p>
                <p className="card-type">{item && item.cardType}</p>
                <p className="status">
                  {item && item.status === ""
                    ? "tsutslagdsan"
                    : item.status
                    ? "hvrgegdsen"
                    : "idewhtei"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
