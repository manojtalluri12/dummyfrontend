import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const nav= useNavigate()
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  // const [data, setdata] = useState([]);
  const notify =(msg)=> toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });
  const success=(msg)=>toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
    });
  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post("https://dummybackend-a3iy.onrender.com/register", {
        username,
        email,
        password,
        confirmpassword,
      })
      .then((response) => {
        success(response.data.message)
        nav('/login')
      })
      .catch((err) => {
       notify(err.response.data.message);
      });
  };
  return (
    <div className="loginpage ">
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="loginpage">
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
            className="input"
          />
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
          <input
            type="password"
            value={confirmpassword}
            placeholder="confirmpassword"
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="input"
          />
          <button className="button">Submit</button>
        </form>
      </div>
      <div className="grid">
          <p className="gp">Already Register</p>
          <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
