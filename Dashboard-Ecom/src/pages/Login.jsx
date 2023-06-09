import { useContext, useState } from "react";
import "../styles/login.css";
import { ProductsContext } from "../context/ProductProvider";
import { UserContext } from "../context/UserProvider";
import Logo from "../components/icon/Logo";

export default function Login() {
  const { loginHandler, currentDate } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setDataName] = useState("");
  const [password, setDataPass] = useState("");
  const [phone, setPhone] = useState("");

  //loginHandler
  function loginHandle(e) {
    e.preventDefault();
    loginHandler(e.target.email.value, e.target.password.value);
  }

  //register
  function register() {
    if (email === "") {
      alert("wrong");
    } else {
      axios
        .post("http://localhost:2020/register", {
          email,
          password,
          name,
          phone: Number(phone),
          address,
        })
        .then((res) => alert(res.data.message));
    }
  }
  return (
    <div className="body">
      <div className="Login">
        <form onSubmit={loginHandle}>
          <div className="logo">
            <Logo />
          </div>
          <input placeholder="Email" type="text" name="email" />
          <input placeholder="Password" type="password" name="password" />
          <button className="buttn" type="submit">
            Login
          </button>
          <div className="rel">
            <p className="text-dark text">or</p>
            <div className="border"></div>
          </div>
          <div>
            <button
              type="button btn"
              className="b"
              data-bs-target="#exampleModal"
              data-bs-toggle="modal"
            >
              Register
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content con">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="email"
                    />
                    <input
                      onChange={(e) => setDataPass(e.target.value)}
                      type="password"
                      placeholder="password"
                    />
                    <input
                      onChange={(e) => setDataName(e.target.value)}
                      type="text"
                      placeholder="name"
                    />
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      placeholder="phone"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={register}
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
