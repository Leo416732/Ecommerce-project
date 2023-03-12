import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import Facebook from "../icons/Facebook";
import Google from "../icons/Google";
import Logo from "../icons/Logo";
import Whatsapp from "../icons/Whatsapp";
import "../style/footer.css";

export default function Footer() {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <footer className={themeMode == "light" ? "footerLight" : "footerDark"}>
        <div className="footer container">
          <div>
            <a href="">
              <Logo />
            </a>
          </div>
        </div>
        <div className="footer-text container d-flex">
          <div className="footer-icons">
            <a href="" className="icon">
              {<Google />}
            </a>
            <a href="" className="icon">
              {<Facebook />}
            </a>
            <a href="" className="icon">
              {<Whatsapp />}
            </a>
          </div>
          <span className={themeMode == "light" ? "text-light copyright" : ""}>
            © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and
            Conditions
          </span>
        </div>
      </footer>
    </>
  );
}
