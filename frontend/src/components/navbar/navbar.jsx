import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import userLogo from "../../assets/userLogo.jpg";
import { Link } from "react-router-dom";
import { StoreContext } from "../../storeContext";
const Navbar = () => {
  const { token, username, setToken, setUsername } = useContext(StoreContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken("");
    setUsername("user");
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/admin/products"}>Admin</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" id="search-box" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <Link to={"/cart"} className="cart">
          <p>2</p>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        {token ? (
          <div className="navProfile">
            <div className="user-logo">
              <img src={userLogo} alt="" />
            </div>
            <div className="navProfile-dropdown">
              <p className="username">{username}</p>
              <div className="navProfile-item">
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Order</p>
              </div>
              <div className="navProfile-item" onClick={handleLogout}>
                <i class="fa-solid fa-right-from-bracket"></i>
                <p>logout</p>
              </div>
              <div className="navProfile-item">
                <i class="fa-solid fa-gear"></i>
                <p>Setting</p>
              </div>
            </div>
          </div>
        ) : (
          <Link to={"/user/signup"} className="login-button">
            <button>Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
