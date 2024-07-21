import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import UserLogin from "./pages/userLogin/userLogin";
import AdminLogin from "./pages/adminLogin/adminLogin";
import Cart from "./pages/cart/cart";
import Products from "./pages/products/products";
import AddProduct from "./pages/addProduct/addProduct";
import AdminProducts from "./pages/adminProducts/adminProducts";
function App() {
  return (
    <>
      <div className="app">
       
          <Navbar></Navbar>
       
          <div className="main-pages">
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/user/signup" element={<UserLogin/>}/>
            <Route path="/admin/signup" element={<AdminLogin/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/admin/addproduct"element={<AddProduct/>}/>
            <Route path="/admin/products" element={<AdminProducts/>}/>
          </Routes>
          </div>
      </div>
    </>
  );
}

export default App;
