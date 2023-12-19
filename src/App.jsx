import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { Header } from "./Header";
import Footer from "./Footer";
import Register from "./Register";
import Home from "../Home";
import Details from "./Details";
import Product from "./Product";
import Coupon from "./Coupon";
import CreateCoupon from "./CreateCoupon";

import DeleteCoupon from "./DeleteCoupon";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import Cart from "./Cart";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Coupon" element={<Coupon />} />
        <Route path="/Coupon/Create" element={<CreateCoupon />} />
        <Route path="/Coupon/Delete/:couponId" element={<DeleteCoupon />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/Create" element={<CreateProduct />} />
        <Route path="/Product/Edit/:productId" element={<EditProduct />} />
        <Route path="/Product/Delete/:productId" element={<DeleteProduct />} />
        <Route path="/Details/:productId" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

