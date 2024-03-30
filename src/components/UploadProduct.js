import React, { useState } from "react";
import axios from "axios";
const UploadProduct = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [data, setdata] = useState("");
  const [thumbnail, setthumbnail] = useState();
  const handlefile = (e) => {
    setthumbnail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setdata({
      title,
      description,
      price,
      rating,
      brand,
      category,
      thumbnail,
    });
    console.log(data);
    try {
      axios
        .post("http://localhost:5000/product", data)
        .then((res) => window.alert(res.data));
    } catch (error) {
      window.alert(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="text"
          name="rating"
          placeholder="rating"
          onChange={(e) => setrating(e.target.value)}
        />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          onChange={(e) => setbrand(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="thumbnail"
          onChange={handlefile}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default UploadProduct;
