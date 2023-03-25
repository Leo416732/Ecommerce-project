import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState();
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(localStorage.getItem("currentUser"));
    }
    axios
      .post(`http://localhost:2020/userList`, {
        role: `${localUser && localUser.role}`,
      })
      .then(
        (res) =>
          res.data.message == "Successfully" && setUserList(res.data.result)
      );
  }, []);

  function loginHandler(email, password) {
    axios
      .post(`http://localhost:2020/login`, {
        email,
        password,
      })
      .then((res) => {
        alert(res.data.status);
        if (res.data.success == true) {
          localStorage.setItem("currentUser", JSON.stringify(res.data.data)),
            setCurrentUser(res.data.data),
            navigate("/");
          localStorage.setItem("jwt", res.data.token);
        }
      })
      .catch((res) => alert(res.response.data));
  }
  function logoutHandler() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("jwt");
    localStorage.removeItem("pageName");
    localStorage.removeItem("currentBtn");
    setCurrentUser();
    navigate("/login");
    location.reload();
  }
  return (
    <UserContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        currentUser,
        setCurrentUser,
        userList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
