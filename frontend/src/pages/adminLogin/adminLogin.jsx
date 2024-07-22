import React, { useContext, useState } from "react";
import "./adminLogin.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StoreContext } from "../../storeContext";
import axios from "axios";
const AdminLogin = () => {
  const { admintoken, SERVER_URL, setAdminToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("signin");
  const [showpassword, setShowPassword] = useState(true);
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onchangeHander = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    let url;
    if (currentState == "signin") {
      url = `${SERVER_URL}/api/admin/signin`;
    } else {
      url = `${SERVER_URL}/api/admin/signup`;
    }
    const response = await axios.post(url, adminData);
     localStorage.setItem('admintoken',response.data.token)
   
    if (response.data.success) {
      setAdminToken(response.data.token)
      localStorage.setItem("admintoken", response.data.token);
      navigate('/admin/products')
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className="adminLogin">
      <div className="admin-left">
        <img src={logo} alt="" />
      </div>
      <div className="admin-right">
        <h1>
          {currentState == "signin" ? "Login as Admin" : "signup as Admin"}
        </h1>
        <form onSubmit={handleSubmitEvent} className="admin-login-container">
          {currentState == "signin" ? (
            <></>
          ) : (
            <div className="input-field">
              <i className="fa-regular fa-user"></i>
              <input
                onChange={onchangeHander}
                type="text"
                id="username"
                placeholder="Username"
                name="name"
                value={adminData.name}
                required
              />
            </div>
          )}

          <div className="input-field">
            <i className="fa-regular fa-envelope"></i>
            <input
              onChange={onchangeHander}
              type="email"
              id="useremail"
              placeholder="Email"
              required
              name="email"
              value={adminData.email}
            />
          </div>
          <div className="input-field">
            <input
              onChange={onchangeHander}
              type={showpassword ? "password" : "text"}
              id="userpassword"
              placeholder="Password"
              required
              name="password"
              value={adminData.password}
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
  );
};

export default AdminLogin;
