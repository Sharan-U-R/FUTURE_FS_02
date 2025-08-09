import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CartProvider } from "./context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
      delay: 50,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
          <Navbar handleOrderPopup={handleOrderPopup} />
          <div className="pt-20 sm:pt-24">
            <Routes>
              <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            
            <Footer />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
