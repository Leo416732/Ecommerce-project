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
      .post(`http://localhost:2020/userPost`, {
        email,
        password,
      })
      .then(
        (res) => (
          localStorage.setItem("currentUser", JSON.stringify(res.data)),
          setCurrentUser(res.data),
          navigate("/profile")
        )
      )
      .catch((res) => alert(res.response.data));
  }
  function logoutHandler() {
    localStorage.removeItem("currentUser");
    setCurrentUser();
  }
  return (
    <UserContext.Provider value={{ loginHandler, logoutHandler, currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
