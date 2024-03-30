import React, { useContext, useState } from "react";
import axios from "axios";
import { store } from "../../App";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
//import store from "../../App";
const Login = () => {
  const nav = useNavigate();
  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const success = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [token, settoken] = useContext(store);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dummybackend-a3iy.onrender.com/login", { email, password })
      .then((res) => {
        success("hi thankyou for using my site");
        settoken(res.data.token);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };
  if (token) {
    nav("/product");
  }
  return (
    <div className="loginpage">
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="loginpage">
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
            className="input"
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
            className="input"
          />

          <button className="button">Submit</button>
        </form>
        <div className="grid">
          <p className="gp">Not yet Register</p>
          <Link to="/">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
