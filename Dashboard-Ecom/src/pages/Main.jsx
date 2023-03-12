import AdminHeader from "../components/Header";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

export default function Main() {
  return (
    <>
      <AdminHeader />
      <div className="d-flex">
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
}
