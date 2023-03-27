import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UsersContext";
import Logo from "../icons/Logo";
import Profile from "../icons/Profile";
import Shop from "../icons/Shop";
import ShopCanvas from "./sub-component/ShopCanvas";
import "../styles/header.css";
import { ThemeContext } from "../context/Theme";

export default function Header() {
  const { currentUser, logoutHandler } = useContext(UserContext);
  const { themeMode } = useContext(ThemeContext);
  const [val, setVal] = useState("");
  const navigate = useNavigate();

  //search product handlerx
  function handleSearch() {
    if (val !== "") {
      navigate(`/search/${val}`);
    }
  }

  let currentUserName =
    currentUser && JSON.parse(localStorage.getItem("currentUser")).name;
  return (
    <header className={themeMode == "light" ? "headerLight" : "headerDark"}>
      <div className="header-navbar container">
        <div className="header-logo" onClick={() => navigate("/profile")}>
          <Logo />
        </div>
        <div className="header-navbar-search">
          <input
            type="text"
            placeholder="Search any things"
            onChange={(e) => setVal(e.target.value)}
            className={themeMode == "light" ? "lightInput" : "darkInput"}
          />
          <button
            className={themeMode == "light" ? "headerLight" : "headerDark"}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {currentUser ? (
          <div className="header-navbar-icons">
            <div className="dropdown">
              <button
                className={
                  themeMode == "light"
                    ? "profile-button headerLight"
                    : "profile-button headerDark"
                }
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Profile />
              </button>
              <ul className="dropdown-menu">
                <div className="dropdown-title">
                  <img
                    src="../profile-name.svg"
                    alt=""
                    className="profile-name"
                  />
                  {currentUserName}
                </div>
                <li>
                  <a className="dropdown-item" href="#">
                    Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="../profile/settings">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-dark"
                    onClick={logoutHandler}
                    href="/profile"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
            <ShopCanvas />
          </div>
        ) : (
          <div className="header-navbar-icons">
            <a href="/login">Sign In </a>
            <a href="/login">
              <Shop />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
