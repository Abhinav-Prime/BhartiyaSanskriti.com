import React from "react";
import "./adminProducts.css";
import Sidebar from "../../components/sidebar/sidebar";
import logo from "../../assets/logo.png";
const AdminProducts = () => {
  return (
    <div className="admin-products">
      <div className="left">
        <Sidebar></Sidebar>
      </div>
      <div className="right">
        <div className="admin-header">
          <h1>
            Welcome ! <span>Lekhansh Sachan</span>
          </h1>
        </div>
        {[1, 2, 3, 4].map(() => (
          <div className="admin-product-item">
            <div className="product-id display-flex">
              <h3>Product id :</h3>
              <p>1234567890</p>
            </div>
            <div className="product-desc">
              <div className="product-category display-flex">
                <h3>Category :</h3>
                <p>fashion</p>
              </div>
              <div className="product-description display-flex">
                <h3>Description:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, vitae.
                </p>
              </div>
              <div className="product-state display-flex">
                <h3>State :</h3>
                <p>Uttar Pradesh</p>
              </div>
              <div className="product-price">
                <div className="price-amount display-flex">
                  <h3>Amount :</h3>
                  <p>3000</p>
                </div>
                <div className="product-discount display-flex">
                  <h3>Discount :</h3>
                  <p>25%</p>
                </div>
              </div>
              <div className="product-availability">
                <div className="available display-flex">
                  <h3>Availability :</h3>
                  <p>30</p>
                </div>
                <div className="qunatity display-flex">
                  <h3>Quantity :</h3>
                  <p>23</p>
                </div>
              </div>
              <div className="product-tags display-flex">
                <h3>Tags :</h3>
                <p>Hello,good,qwer,qwer</p>
              </div>
            </div>
            <div className="product-image">
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
              <img src={logo} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
