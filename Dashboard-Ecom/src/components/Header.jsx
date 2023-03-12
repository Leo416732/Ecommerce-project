import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import Logo from "./icon/Logo";
import Logout from "./icon/Logout";

export default function AdminHeader() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  function searchHandler() {
    navigate(`/search/${search}`);
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
                <a href="/">
                  <button type="button" className="active-button">
                    Тийм
                  </button>
                </a>
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
