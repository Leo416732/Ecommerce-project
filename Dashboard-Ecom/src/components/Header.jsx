import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import "../styles/header.css";
import Logo from "./icon/Logo";
import Logout from "./icon/Logout";

export default function AdminHeader() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const { logoutHandler } = useContext(UserContext);

  function searchHandler() {
    if (search) {
      navigate(`/search/${search}`);
      localStorage.setItem("pageName", "Search");
    } else {
      alert("something write");
    }
  }
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="">
          <Logo />
        </a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search any things"
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <div className="navbar-icons d-flex">
        <button
          type="button"
          className="navbar-logout"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Logout />
          Гарах
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img
                className="quistion-mark"
                src="../quistion-mark.svg"
                alt=""
              />
              <div className="modal-body modal-quistion">
                Та системээс гарахдаа итгэлтэй байна уу?
              </div>
              <div className="logout-buttons">
                <button
                  type="button"
                  onClick={() => logoutHandler()}
                  className="active-button"
                  data-bs-toggle="disable"
                >
                  Тийм
                </button>
                <button
                  type="button"
                  className="dismiss-button"
                  data-bs-dismiss="modal"
                >
                  Үгүй
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
