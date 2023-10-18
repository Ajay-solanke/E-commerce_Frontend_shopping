import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";
import MensFashion from "./Pages/MensFashion";
import WomensFashion from "./Pages/WomensFashion";
import MobileProducts from "./Pages/MobileProducts";
import ElectronicsProducts from "./Pages/ElectronicsProducts";
import Contact from "./Pages/Contact";
// import UserList from "./Pages/Userdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mensfashion" element={<MensFashion />} />
        <Route path="/womensfashion" element={<WomensFashion />}></Route>
        <Route path="/mobilephones" element={<MobileProducts />}></Route>
        <Route path="/electronics" element={<ElectronicsProducts />}></Route>
        <Route path="/Customer-Service" element={<Contact />}></Route>
      </Routes>
    </Router>
    // <div>
    //   <UserList></UserList>
    // </div>
  );
}

export default App;
