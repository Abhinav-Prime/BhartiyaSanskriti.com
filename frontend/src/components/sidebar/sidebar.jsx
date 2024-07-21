import React, { useState } from "react";
import './sidebar.css'
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = () => {
const navigate= useNavigate()
const {pathname}=useLocation();
const[currentPage,setCurrentPage]=useState(pathname);
const handleAddProduct=()=>{
    setCurrentPage(pathname);
    navigate('/admin/addproduct')
}
const handleAdminProducts=()=>{
    setCurrentPage(pathname)
    navigate('/admin/products')
}
console.log(currentPage)
  return (
    <div className="sidebar">
      <div className={`nav-sidebar ${currentPage=="/admin/addproduct"?"set-bgcolor":""} `} onClick={handleAddProduct}>
        <p>Add</p>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className={`nav-sidebar ${currentPage=="/admin/products"?"set-bgcolor":""} `} onClick={handleAdminProducts}>
        <p>Items</p>
        <i className="fa-solid fa-store"></i>
      </div>
    </div>
  );
};

export default Sidebar;
