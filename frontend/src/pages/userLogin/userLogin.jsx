import React, { useContext, useState } from "react";
import "./userLogin.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { StoreContext } from "../../storeContext";
import axios from 'axios'
const UserLogin = () => {
  const {  SERVER_URL ,setToken,setUsername} = useContext(StoreContext);
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("signin");
  const [showpassword, setShowPassword] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
   const name=e.target.name;
   const value=e.target.value;
   setUserData((prev)=>({...prev,[name]:value}));
  };
  const handleUserLogin = async (e) => {
    e.preventDefault();
    if (currentState == "signin") {
      const new_URL = `${ SERVER_URL}/api/user/signin`;
      const response= await axios.post(new_URL,userData);
       if(response.data.success){
        setToken(response.data.token)
        setUsername(response.data.username)
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('username',response.data.username);
       }
       else{
        alert(response.data.message);
       }
    } else {
      const new_URL = `${ SERVER_URL}/api/user/signup`;
      const response =await axios.post(new_URL,userData);
      console.log(response.data)
      if(response.data.success){
        setToken(response.data.token)
        setUsername(response.data.username)
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('username',response.data.username);
       }
       else{
        alert(response.data.message);
       }
   
    }
    setUserData({name:"",email:"",password:""})
  };
  return (
    <div className="userLogin">
      <div className="user-left">
        <img src={logo} alt="" />
      </div>
      <div onSubmit={handleUserLogin} className="user-right">
        <h1>{currentState == "signin" ? "sign in" : "sign up"}</h1>
        <form className="user-login-container">
          {currentState == "signin" ? (
            <></>
          ) : (
            <div className="input-field">
              <i className="fa-regular fa-user"></i>
              <input
                onChange={onChangeHandler}
                type="text"
                id="username"
                placeholder="Username"
                name="name"
                value={userData.name}
              />
            </div>
          )}

          <div className="input-field">
            <i className="fa-regular fa-envelope"></i>
            <input
              onChange={onChangeHandler}
              type="email"
              id="useremail"
              placeholder="Email"
              name="email"
              value={userData.email}
            />
          </div>
          <div className="input-field">
            <input
              onChange={onChangeHandler}
              type={showpassword ? "password" : "text"}
              id="userpassword"
              placeholder="Password"
              name="password"
              value={userData.password}
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

          <div className="admin-login">
            <div>
              <hr />
              <p>OR</p>
              <hr />
            </div>
            <p>
              Login as a admin ?{" "}
              <span
                onClick={() => {
                  navigate("/admin/signup");
                }}
              >
                {" "}
                Click here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
