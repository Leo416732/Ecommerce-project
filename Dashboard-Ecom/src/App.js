import { Route, Routes, useParams } from "react-router-dom";
import Dashboard from "./components/menu/Dashboard";
import Moderator from "./components/menu/Moderator";
import Orders from "./components/menu/Orders";
import Settings from "./components/menu/Settings";
import Users from "./components/menu/Users";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Main from "./pages/Main";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserProvider";
import axios from "axios";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const token = localStorage.getItem("jwt");
  const param = useParams();
  useEffect(() => {
    !param == "login" &&
      token &&
      axios
        .post("http://localhost:2020/protected", { token })
        .then(
          (res) => (
            res.status == 200 &&
              localStorage.setItem(
                "currentUser",
                JSON.stringify(res.data.data)
              ),
            setCurrentUser(res.data.data)
          )
        );
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {currentUser ? (
          <>
            <Route path="/search/:name" element={<Search />} />
            <Route path="/" element={<Main />}>
              <Route index element={<Dashboard />} />
              <Route path="/controlBoard" element={<Dashboard />} />
              <Route path="/products/page/:id" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<Users />} />
              <Route path="/mod" element={<Moderator />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </>
        ) : (
          <></>
        )}
      </Routes>
    </div>
  );
}

export default App;
