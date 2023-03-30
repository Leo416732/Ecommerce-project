import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/sidemenu.css";
import { urls } from "../util/data";

export default function SideMenu() {
  let pageName = JSON.parse(localStorage.getItem("pageName"));
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(
    pageName.name ? pageName.name : "DashBoard"
  );

  function activeButton(url) {
    navigate(`${url.url}`);
    setActiveBtn(url.name);
    localStorage.setItem("pageName", JSON.stringify(url));
  }

  useEffect(() => {
    pageName && setActiveBtn(pageName.name);
    navigate(`${pageName.url}`);
  }, []);

  return (
    <>
      <div className="sidemenu">
        {urls.map((url, index) => {
          return (
            <div className="dashboard-button" key={index}>
              <button
                className={
                  activeBtn
                    ? activeBtn === url.name
                      ? "Active dashboard-button"
                      : "inactive dashboard-button"
                    : "DashBoard" === url.name
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
