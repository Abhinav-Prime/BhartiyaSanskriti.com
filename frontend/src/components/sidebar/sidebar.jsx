import React, { useContext, useState } from "react";
import "./sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../storeContext";
const Sidebar = () => {
const {admintoken}= useContext(StoreContext)
console.log(admintoken)
  // const [admintoken,setAdminToken]=useState(true)
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname);
  const handleAddProduct = () => {
    setCurrentPage(pathname);
    navigate("/admin/addproduct");
  };
  const handleAdminProducts = () => {
    setCurrentPage(pathname);
    navigate("/admin/products");
  };
  return (
    <div className="sidebar">
      <div
        className={`nav-sidebar ${
          currentPage == "/admin/addproduct" ? "set-bgcolor" : ""
        } `}
        onClick={handleAddProduct}
      >
        <p>Add</p>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div
        className={`nav-sidebar ${
          currentPage == "/admin/products" ? "set-bgcolor" : ""
        } `}
        onClick={handleAdminProducts}
      >
        <p>Items</p>
        <i className="fa-solid fa-store"></i>
      </div>
      <div className="admin-info">
        {!admintoken?<Link to={'/admin/signup'} className="admin-signin">Sign in</Link>:
        <>
        <p>Admin</p>
        <i class="fa-solid fa-user"></i>
        <div className="admin-dropdown">
          <div className="admin-dropdown-flex">
            <p>Logout</p>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="admin-dropdown-flex">
            <p>Setting</p>
            <i class="fa-solid fa-gear"></i>
          </div>
          
        </div>
        </>
        }
        
 
      </div>
    </div>
  );
};

export default Sidebar;
