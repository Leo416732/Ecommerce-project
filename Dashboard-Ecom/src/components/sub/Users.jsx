import { useContext } from "react";
import "../../styles/user.css";
import { ProductsContext } from "../../context/ProductProvider";

export default function Users() {
  const { usersList } = useContext(ProductsContext);
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
          className="dashboard-button-image"
          src="https://cdn-icons-png.flaticon.com/512/511/511587.png"
          alt=""
        />
        <p>Users</p>
      </div>
      <div className="all">
        <div>
          <img className="" src="../correct.svg" alt="" /> Бүгд
        </div>
      </div>
      <div className="users-container">
        <div className="user">
          <p className="id">User ID</p>
          <p className="name">Name</p>
          <p className="email">Email</p>
          <p className="phone">Phone</p>
          <p className="order">Order</p>
          <p className="date">Date</p>
          <p></p>
        </div>
        {usersList &&
          usersList.map((e, index) => {
            return (
              <div className="user" key={index}>
                <p className="id">#{e.userId}</p>
                <p className="name">{e.name}</p>
                <p className="email">{e.email}</p>
                <p className="phone">{e.phone}</p>
                <p className="order">1</p>
                <p className="date">2022/02/02</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
