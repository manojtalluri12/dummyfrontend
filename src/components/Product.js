import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { store } from "../App";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

//const r=require('../images/')
//import images from '../images'
const Product = () => {
  const nav = useNavigate();
  //const [ata,etdata]=useState({})
  const [token, settoken] = useContext(store);
  const [data, setdata] = useState([]);
  const [loading,setloading]=useState(false)
  //console.log(data);
  useEffect(() => {
    setloading(true)
    axios
      .get("http://localhost:5000/getproduct", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {setdata(res.data); setloading(false)});
  }, []);
 
  if (!token) {
    nav("/login");
  }
  const handleOder = (id) => {
    const find = data.find((each) => each._id == id);
    //console.log(find);
    axios
      .post(
        "http://localhost:5000/order",
        {
          title: find.title,
          description: find.description,
          price: find.price,
          rating: find.rating,
          brand: find.brand,
          category: find.category,
          thumbnail: find.thumbnail,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => alert(res.data.message));
  };
  return (
    <div>
        {

          loading && <h1 className="view"><ClimbingBoxLoader color="#36d7b7" /></h1>
        }
      
      <div className="cards">
        {data.length >= 1 &&
          data.map((each) => {
            const {
              title,
              price,
              thumbnail,
            } = each;
            return (
              <div key={each._id} className="card">
                <div>
                  <img src={thumbnail} alt="gg" className="proimg" />
                </div>
                <p>{title}</p>
                <button>${price}</button>
                <button onClick={() => handleOder(each._id)}>Order</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
