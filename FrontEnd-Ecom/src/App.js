import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProductCard from "./components/sub-component/ProductCard";
import Search from "./pages/Search";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/Theme";
import "./styles/theme.css";
import axios from "axios";

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
        <Route path="/" element={<Main />}>
          <Route index element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/search/:product" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
