import React, { useContext, useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { Base_url } from "../../config.js";
import axios from "axios";
import toast from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${Base_url}/user/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (data.success) {
        toast.success("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="left">
          <h3>Welcome to ElderSerene</h3>
          <p>Empowering Elders, Enriching Lives</p>
        </div>
        <div className="right">
          <h2>Create Account</h2>
        </div>
        <div className="bottom">
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <p href="">
              Already a user ? <Link to="/login">Login</Link>
            </p>
            <button type="submit">Signup</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
