import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UsersContext";
import { ThemeContext } from "../context/Theme";
import "../styles/settings.css";

export default function Settings() {
  const { themeMode, setTheme } = useContext(ThemeContext);
  const { currentUser } = useContext(UserContext);

  let currentUserInfo =
    currentUser && JSON.parse(localStorage.getItem("currentUser"));

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
      currentUserInfo.password === e.target.oldPass.value &&
      e.target.newPass.value === e.target.newPassVer.value
    ) {
      console.log(e.target.oldPass.value);
      obj = {
        password: e.target.newPass.value,
      };
      put(obj, currentUserInfo.userId, e);
    } else {
      alert("wrong");
      e.target.oldPass.value = "";
      e.target.newPass.value = "";
      e.target.newPassVer.value = "";
    }
  }
  return (
    <div className={themeMode == "light" ? "light settings" : "dark settings"}>
      <div
        className={
          themeMode == "light" ? "light profile-info" : "dark profile-info"
        }
      >
        <h5>Profile information</h5>
        <p className={themeMode == "light" ? "light" : "dark"}>
          Hi, I'm {currentUser && currentUserInfo.name} ...
        </p>
        <div className="label">
          Full Name:{" "}
          <p className={themeMode == "light" ? "light" : "dark"}>
            {currentUser && currentUserInfo.name}
          </p>
        </div>
        <div className="label">
          Mobile:{" "}
          <p className={themeMode == "light" ? "light" : "dark"}>
            {" "}
            {currentUser && currentUserInfo.phone}
          </p>
        </div>
        <div className="label">
          Email:{" "}
          <p className={themeMode == "light" ? "light" : "dark"}>
            {currentUser && currentUserInfo.email}
          </p>
        </div>
        <div className="label">
          Location:{" "}
          <p className={themeMode == "light" ? "light" : "dark"}>
            {currentUser && currentUserInfo.address}
          </p>
        </div>
      </div>
      <form action="" onSubmit={changePassword} className="change-pass">
        <h5>Change Password</h5>
        <div
          className={
            themeMode == "light" ? "light settings-from" : "dark settings-from"
          }
        >
          <p className={themeMode == "light" ? "light" : "dark"}>
            Хуучин нууц үг
          </p>
          <input
            className={themeMode == "light" ? "lightInput" : "darkInput"}
            type="text"
            name="oldPass"
          />
        </div>
        <div
          className={
            themeMode == "light" ? "light settings-from" : "dark settings-from"
          }
        >
          <p className={themeMode == "light" ? "light" : "dark"}>
            Шинэ нууц үг
          </p>
          <input
            type="text"
            className={themeMode == "light" ? "lightInput" : "darkInput"}
            name="newPass"
          />
        </div>
        <div
          className={
            themeMode == "light" ? "light settings-from" : "dark settings-from"
          }
        >
          <p className={themeMode == "light" ? "light" : "dark"}>
            Шинэ нууц үг давтах
          </p>
          <input
            className={themeMode == "light" ? "lightInput" : "darkInput"}
            type="text"
            name="newPassVer"
          />
        </div>
        <div
          className={
            themeMode == "light" ? "light settings-from" : "dark settings-from"
          }
        >
          <button
            className={
              themeMode == "light" ? "lightInput saveBtn" : "darkInput saveBtn"
            }
            type="submit"
          >
            Хадгалах
          </button>
        </div>
      </form>
      <div className="change-theme">
        <h5>Change Mode</h5>
        <button
          className="themeBtn"
          onClick={() => {
            themeMode == "light"
              ? localStorage.setItem("theme", "dark")
              : localStorage.setItem("theme", "light");
            themeMode == "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          {themeMode} mode
        </button>
      </div>
    </div>
  );
}
