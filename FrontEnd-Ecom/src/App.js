import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Main";
import ProductCard from "./components/sub-component/ProductCard";
import Search from "./pages/Search";
import MainOutlet from "./pages/Main-Outlet";
import Settings from "./pages/Settings";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/Theme";
import "./styles/theme.css";
import axios from "axios";
import Main from "./pages/Main";

function App() {
  const { themeMode } = useContext(ThemeContext);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    token &&
      axios
        .post("http://localhost:2020/protected", { token })
        .then((res) => console.log(res));
  });

  return (
    <div className={themeMode == "light" ? "App light" : "App dark"}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainOutlet />}>
          <Route index element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/search/:product" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
