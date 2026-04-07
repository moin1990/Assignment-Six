import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const mainSectionRef = useRef(null);

  const handleCartClick = () => {
    setActiveTab("cart");
    mainSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={cartItems.length} onCartClick={handleCartClick} />
      <Banner />
      <Stats />
      <MainSection
        ref={mainSectionRef}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <CTABanner />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default App;
