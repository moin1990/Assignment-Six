import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiCheck } from "react-icons/fi";

const tagStyles = {
  popular: "bg-purple-100 text-purple-700",
  new: "bg-green-100 text-green-700",
  "best-seller": "bg-orange-100 text-orange-700",
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const [added, setAdded] = useState(false);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    onAddToCart(product);
    setAdded(true);
    toast.success(`🎉 ${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2500,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-visible relative">
      {/* Tag Badge */}
      {product.tag && (
        <div className="absolute -top-3 right-4 z-10">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagStyles[product.tagType] || "bg-gray-100 text-gray-600"}`}>
            {product.tag}
          </span>
        </div>
      )}

      <div className="card-body p-6 space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-xl border border-violet-100 text-violet-600">
          <i className={product.icon}></i>
        </div>

        {/* Name & Description */}
        <div>
          <h3 className="text-gray-900 font-bold text-lg leading-tight">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">{product.description}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm">/{product.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-1.5">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <FiCheck className="text-violet-500 flex-shrink-0" size={14} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={handleBuyNow}
          className={`btn w-full rounded-full border-none font-semibold text-sm transition-all duration-300 ${
            isInCart || added
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-violet-600 hover:bg-violet-700 text-white"
          }`}
        >
          {isInCart ? "✓ Added to Cart" : added ? "✓ Added!" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
