import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { store } from "../App";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiChatDeleteLine } from "react-icons/ri";
const Profile = () => {
  const nav = useNavigate();
  const [data, setdata] = useState({});
  const [token, settoken] = useContext(store);
  const [loading, setloading] = useState(false);
  const [username, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setdata(res.data);
        setloading(false);
      });
  }, []);
  //console.log(data);
  const updateAccount = (id) => {
    console.log(id);
    axios
      .patch(`http://localhost:5000/edit/${id}`, {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        alert(response.data.message);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
      alert(response.data.message);
    });
  };

  if (!token) {
    nav("/login");
  }
  return (
    <>
      {loading && (
        <h1 className="view">
          <ClimbingBoxLoader color="#36d7b7" />
        </h1>
      )}
      {data && (
        <div className="profile">
          <div>
            <h1>My Profile</h1>
          </div>
          <div className="pro">
            <input
              type="text"
              value={data.username}
              className="input"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              value={data.email}
              className="input"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              value={data.password}
              className="input"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="grid">
            <button className="update" onClick={() => updateAccount(data._id)}>
              Update Account
            </button>
            <Button className="delete" variant="danger" onClick={handleShow}>
              Delete Account
            </Button>
          </div>
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="loginpage">
                <RiChatDeleteLine size={100} className="delete"/>R u Sure to Delete Your profile
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(data._id);
                    settoken(null);
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
