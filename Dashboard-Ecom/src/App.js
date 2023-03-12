import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/sub/Dashboard";
import Moderator from "./components/sub/Moderator";
import Orders from "./components/sub/Orders";
import Settings from "./components/sub/Settings";
import Users from "./components/sub/Users";
import Products from "./components/sub/Products";
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
