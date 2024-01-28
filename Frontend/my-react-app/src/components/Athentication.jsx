import React, { useState,useEffect } from "react";
import "./css/auth.css";
import Alert from "./Alert";
import img from "../assets/img/signin.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const user = localStorage.getItem("token");
  const navigate=useNavigate()

  useEffect(() => {
    user ? navigate('/home') : navigate('/');
  }, [user]);

  const [authvalues, setauthvalues] = useState({});
  const [alertvalues, setalertvalues] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [authtype, setauthtype] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4023/api/user/registered/user";
      const sendData = {
        username: authvalues.username,
        email: authvalues.email,
        password: authvalues.password,
      };
      document.getElementById('submit').value = 'Loading...';
      const response = await axios.post(url, sendData);
      if (response.data.status === "ok") {
        const userdata=response.data.userinfo
        if(userdata){
          navigate("/otp", { state: { id:userdata.id } });
        }
      } else {
        setalertvalues({
          show: true,
          type: "danger",
          message: response.data.message,
        });
      }
    } catch (error) {
      console.error(error);
  
      setalertvalues({
        show: true,
        type: "danger",
        message: error.response
          ? error.response.data.message
          : "An error occurred.",
      });
    } finally {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById('submit').value = "Submit";
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:4023/api/user/login/user';
      const data = {
        email: authvalues.email,
        password: authvalues.password, 
      };
  
      document.getElementById('submit').value = 'Loading...';
  
      const response = await axios.post(url, data);
  
      if (response.data.status === 'ok') {
        localStorage.setItem('token',response.data.token)
        navigate('/home')
        setalertvalues({
          show: true,
          type: 'success',
          message: response.data.message,
        });
      } else if (response.data.message) {
        setalertvalues({
          show: true,
          type: 'danger',
          message: response.data.message,
        });
      } else {
        setalertvalues({
          show: true,
          type: 'danger',
          message: 'Something went wrong',
        });
      }
    } catch (error) {
      console.error(error);
  
      setalertvalues({
        show: true,
        type: 'danger',
        message: error.response
          ? error.response.data.message
          : 'An error occurred.',
      });
    } finally {
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('submit').value = 'Submit';
    }
  };
  
  const handleChange = (e) => {
    setauthvalues({ ...authvalues, [e.target.name]: e.target.value });
  };

  const handleAuthtype = () => {
    setauthtype(!authtype);
    setauthvalues({});
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    if (name && email && pass) {
      if (name.value || email.value || pass.value) {
        name.value = "";
        email.value = "";
        pass.value = "";
      }
    }
  };

  return (
    <>
    <div id="auth">
      <div className="leftcon">
        <img src={img} alt="img" />
      </div>
      <div className="rightcon">
        {authtype ? (
          <>
            <h2>LOGIN</h2>
            <form id="form" onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                id="email"
              />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="password"
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                disabled={!authvalues.email || !authvalues.password}
              />
              <p>
                New account <b onClick={handleAuthtype}>Signin</b>{" "}
              </p>
            </form>
          </>
        ) : (
          <>
            <h2>SIGNIN</h2>
            <form id="form" onSubmit={handleSignin}>
              <input
                type="text"
                name="username"
                placeholder="name"
                onChange={handleChange}
                id="name"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                id="email"
              />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="password"
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                disabled={!authvalues.username || !authvalues.email || !authvalues.password}
              />
              <p>
                Have an account <b onClick={handleAuthtype}>Login</b>{" "}
              </p>
            </form>
          </>
        )}
      </div>
      {alertvalues.show && (
        <div className="alert">
          <Alert alertvalue={alertvalues} setalert={setalertvalues} />
        </div>
      )}
    </div>
    </>
  );
}

export default Authentication;