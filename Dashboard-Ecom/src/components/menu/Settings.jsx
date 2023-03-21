import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import "../../styles/settings.css";

export default function Settings() {
  const { currentUser } = useContext(UserContext);
  let currentUserPass =
    currentUser && JSON.parse(localStorage.getItem("currentUser")).password;
  let currentUserName =
    currentUser && JSON.parse(localStorage.getItem("currentUser")).name;
  let currentUserId =
    currentUser && JSON.parse(localStorage.getItem("currentUser")).userId;

  function put(obj, id, e) {
    axios
      .put(`http://localhost:2020/user/${id}`, obj)
      .then((res) =>
        localStorage.setItem("currentUser", JSON.stringify(res.data))
      );
    alert("correct");
    e.target.oldPass.value = "";
    e.target.newPass.value = "";
    e.target.newPassVer.value = "";
  }
  function changePassword(e) {
    e.preventDefault();
    let obj;
    if (
      currentUserPass === e.target.oldPass.value &&
      e.target.newPass.value === e.target.newPassVer.value
    ) {
      console.log(e.target.oldPass.value);
      obj = {
        password: e.target.newPass.value,
      };
      put(obj, currentUserId, e);
    } else {
      alert("wrong");
      e.target.oldPass.value = "";
      e.target.newPass.value = "";
      e.target.newPassVer.value = "";
    }
  }
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
          className="dashboard-button-image"
          src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png"
          alt=""
        />
        <p>Settings</p>
      </div>
      <div className="settings">
        <form action="" onSubmit={changePassword}>
          <div className="settings-form">
            <p>Хуучин нууц үг</p>
            <input type="text" name="oldPass" />
          </div>
          <div className="settings-form">
            <p>Шинэ нууц үг</p>
            <input type="text" name="newPass" />
          </div>
          <div className="settings-form">
            <p>Шинэ нууц үг давтах</p>
            <input type="text" name="newPassVer" />
          </div>
          <div className="settings-form">
            <button type="submit">Хадгалах</button>
          </div>
        </form>
      </div>
    </div>
  );
}
