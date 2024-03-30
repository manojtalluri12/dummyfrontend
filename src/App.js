import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadProduct from "./components/UploadProduct.js";
import Navbar from "./components/Navbar";
import Product from "./components/Product.js";
import Profile from "./components/Profile";
import Login from "./components/user/Login.js";
import Register from "./components/user/Register.js";
import Orders from "./pages/Orders.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.js";
export const store = createContext();
const App = () => {
  const [token, settoken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, settoken]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<UploadProduct />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pro" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </store.Provider>
      <hr/>
      <Footer/>
    </div>
  );
};

export default App;
