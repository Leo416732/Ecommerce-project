import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UsersContext({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(localStorage.getItem("currentUser"));
    }
  }, []);

  function loginHandler(email, password) {
    axios
      .post(`http://localhost:2020/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert(res.data.status);
        if (res.data.success == true) {
          localStorage.setItem("currentUser", JSON.stringify(res.data.data)),
            setCurrentUser(res.data.data),
            navigate("/main");
          localStorage.setItem("jwt", res.data.token);
        }
      })
      .catch((res) => alert(res.response.data));
  }
  function logoutHandler() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentBtn");
    setCurrentUser();
    navigate("/");
  }
  return (
    <UserContext.Provider value={{ loginHandler, logoutHandler, currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
