import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

import { GiCrossedAirFlows } from "react-icons/gi";
const NavbarOne = () => {
  const [menu, setmenu] = useState(false);
  
  const handlemenu = () => {
    setmenu((m) => !m);
  };
  
  return (
    <div className="navbar">
      <div className="navleft">
        <Link to="/" className="li">
          MY CART
        </Link>
      </div>
      {menu ?  (
        <HiMenuAlt2 size={20} className="menu"  onClick={ handlemenu} />
      ):(
        <GiCrossedAirFlows size={20} className="menu" onClick={ handlemenu}/>
      ) }

      <div className={menu ?"active":"navright"}>
        <Link to="/" className="li">
          Register
        </Link>
        <Link to="/login" className="li">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavbarOne;
