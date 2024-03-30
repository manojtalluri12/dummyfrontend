import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { store } from "../App";
import NavbarOne from "../pages/NavbarOne";
import NavbarTwo from "../pages/NavbarTwo";
const Navbar = () => {
  const [token,settoken]=useContext(store)
  return (
    <div>
      {
        !token ? (<NavbarOne/>):(<NavbarTwo/>)
      }
    </div>
  );
};

export default Navbar;
