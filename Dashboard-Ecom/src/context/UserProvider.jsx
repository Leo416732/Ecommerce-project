import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(localStorage.getItem("currentUser"));
    }
  }, []);

  function loginHandler(userName, password) {
    axios
      .post(`http://localhost:2020/user`, {
        userName,
        password,
      })
      .then(
        (res) => (
          localStorage.setItem("currentUser", JSON.stringify(res.data)),
          setCurrentUser(res.data),
          navigate("/admin/controlBoard")
        )
      )
      .catch((res) => console.log(res.response.data));
  }
  function logoutHandler() {
    localStorage.removeItem("currentUser");
    setCurrentUser();
  }
  return (
    <UserContext.Provider
      value={{ loginHandler, logoutHandler, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
