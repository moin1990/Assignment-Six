import React from "react";
import { toast } from "react-toastify";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.error(`🗑️ ${item.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn("Your cart is empty!", { autoClose: 2000 });
      return;
    }
    onCheckout();
    toast.success("🛍️ Order placed! Thank you for your purchase!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center">
              <FiShoppingBag className="text-violet-300" size={36} />
            </div>
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-2">Your cart is empty</h3>
          <p className="text-gray-400 text-sm">Browse our products and add something you love!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
        </div>

        <div className="divide-y divide-gray-50">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-xl border border-violet-100 text-violet-600 flex-shrink-0">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-gray-400 text-sm">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-400 hover:text-red-600 font-semibold text-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200"
              >
                <FiTrash2 size={14} />
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 font-medium">Total:</span>
            <span className="text-2xl font-extrabold text-gray-900">${total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="btn w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-none rounded-full font-bold text-base"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
