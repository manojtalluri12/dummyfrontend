import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../App";
import { HiMenuAlt2 } from "react-icons/hi";
import { GiCrossedAirFlows } from "react-icons/gi";
const NavbarTwo = () => {
  const nav = useNavigate();
  const [menu, setmenu] = useState(false);
  const [token, settoken] = useContext(store);
  const handlemenu = () => {
    setmenu((m) => !m);
  };
 
  if (!token) {
    return nav("/login");
  }
  return (
    <div className="navbar">
      <div className="navleft">
      <Link to="/product"  className="li" >MY CART</Link>
      </div>
      {menu ?  (
        <HiMenuAlt2 size={20} className="menu"  onClick={ handlemenu} />
      ):(
        <GiCrossedAirFlows size={20} className="menu" onClick={ handlemenu}/>
      ) }
      <div className={menu ?"active":"navright"}>
        <div className="dropdown li">
          <img src="https://media.istockphoto.com/id/1746378669/photo/digital-metaverse-avatar-of-young-indian-man-walking-through-immersive-3d-world-internet.jpg?b=1&s=612x612&w=0&k=20&c=afD6bXsoks4QQYEKHrUz59V_DiIRDnjUvr-tWm08rOE=" alt="zkma" className="dropbtn"/>
          <div class="dropdown-content">
          <Link to="/pro" className="li">
          My profile
        </Link>
        <Link to="/orders" className="li">
          Order
        </Link>
        <button onClick={() => settoken(null)} className="li">
          Logout
        </button>
          </div>
        </div>
        <Link to="/product" className="li">
          Product
        </Link>
       
        
      </div>
    </div>
  );
};

export default NavbarTwo;
