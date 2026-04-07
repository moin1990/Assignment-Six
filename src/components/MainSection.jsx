import React, { forwardRef } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { FiShoppingCart, FiGrid } from "react-icons/fi";

const MainSection = forwardRef(({ cartItems, onAddToCart, onRemove, onCheckout, activeTab, setActiveTab }, ref) => {

  return (
    <section ref={ref} className="bg-gray-50 py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "products"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600"
              }`}
            >
              <FiGrid size={15} />
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === "cart"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600"
              }`}
            >
              <FiShoppingCart size={15} />
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        ) : (
          <Cart
            cartItems={cartItems}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
});

export default MainSection;
