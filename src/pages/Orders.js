import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { store } from "../App";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const nav = useNavigate();
  const [token, settoken] = useContext(store);
  const [orderedata, setorder] = useState([]);
  const [data,setdata]=useState({})
  console.log(orderedata);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getorders", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setorder(res.data));
      axios
      .get("http://localhost:5000/profile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setdata(res.data);
       
      });
  }, []);
  if (!token) {
    nav("/login");
  }
  return (
    <div>
      {
        orderedata.length > 0 &&  <p className="text-center p-2 m-3"> hi {data.username} below orders you ordered</p>
      }
       
      {orderedata.length == 0 && (
        <p className="text-center p-2 m-3">No items in order</p>
      )}
      {orderedata.length > 0 &&
        orderedata.map((each) => {
          return (
            <div className="orders">
              <div key={each._id} className="order">
                <div><img src={each.thumbnail} alt="uyuy" className="img"/></div>
                <div className="orderright">
                   <p>{each.title}</p>
                   <p>${each.price}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Orders;
