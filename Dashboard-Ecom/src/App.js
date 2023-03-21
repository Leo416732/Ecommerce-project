import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/menu/Dashboard";
import Moderator from "./components/menu/Moderator";
import Orders from "./components/menu/Orders";
import Settings from "./components/menu/Settings";
import Users from "./components/menu/Users";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/admin" element={<Main />}>
          <Route path="/admin/controlBoard" element={<Dashboard />} />
          <Route path="/admin/products/page/:id" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/mod" element={<Moderator />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
