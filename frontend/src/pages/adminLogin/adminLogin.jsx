import React, { useState } from "react";
import "./adminLogin.css"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("signin");
  const [showpassword, setShowPassword] = useState(true);
  const handleSubmitEvent=(e)=>{
    e.preventDefault();
    navigate('/admin/addproduct')
  }
  return (
    <div className="adminLogin">
    <div className="admin-left">
      <img src={logo} alt="" />
    </div>
    <div className="admin-right">
      <h1>{currentState == "signin" ? "Login as Admin" : "signup as Admin"}</h1>
      <form onSubmit={handleSubmitEvent} className="admin-login-container">
        {currentState == "signin" ? (
          <></>
        ) : (
          <div className="input-field">
            <i className="fa-regular fa-user"></i>
            <input type="text" id="username" placeholder="Username" required />
          </div>
        )}

        <div className="input-field">
          <i className="fa-regular fa-envelope"></i>
          <input type="email" id="useremail" placeholder="Email" required />
        </div>
        <div className="input-field">
          <input
            type={showpassword ? "password" : "text"}
            id="userpassword"
            placeholder="Password"
            required
          />
          <i
            onClick={() => setShowPassword((currVal) => !currVal)}
            className={`fa-regular ${
              showpassword ? "fa-eye" : "fa-eye-slash"
            }`}
          ></i>
        </div>
        {currentState == "signin" ? (
          <div className="signin-checkbox">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div className="forget-password">
              <p>Forget password?</p>
            </div>
          </div>
        ) : (
          <div className="checkbox">
            <input type="checkbox" required />
            <p>By continuing, i agree the terms of use & privacy policy</p>
          </div>
        )}
        <div className="submit-button">
          <button type="submit">
            {currentState == "signin" ? "Login" : "Create Account"}
          </button>
        </div>
        {currentState == "signin" ? (
          <p className="account">
            Create Account ?{" "}
            <span
              onClick={() => {
                setCurrentState("signup");
              }}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p className="account">
            Already have account ?{" "}
            <span
              onClick={() => {
                setCurrentState("signin");
              }}
            >
              {" "}
              Click here
            </span>
          </p>
        )}

      </form>
    </div>
  </div>
  )
}

export default AdminLogin