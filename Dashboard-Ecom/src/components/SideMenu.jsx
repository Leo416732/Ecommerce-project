import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidemenu.css";
import { urls } from "../util/data";

export default function SideMenu() {
  let pageName = localStorage.getItem("pageName");
  const [activeBtn, setActiveBtn] = useState(pageName);
  localStorage.setItem("pageName", activeBtn);
  const navigate = useNavigate();

  function activeButton(url) {
    navigate(`${url.url}`);
    setActiveBtn(url.name);
  }

  return (
    <>
      <div className="sidemenu">
        {urls.map((url, index) => {
          return (
            <div className="dashboard-button" key={index}>
              <button
                className={
                  activeBtn === url.name
                    ? "Active dashboard-button"
                    : "inactive dashboard-button"
                }
                onClick={() => activeButton(url)}
              >
                <img
                  className="dashboard-button-image"
                  src={url.image}
                  alt=""
                />
                <p>{url.name}</p>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
