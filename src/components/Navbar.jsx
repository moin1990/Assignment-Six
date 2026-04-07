import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-6 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className="text-2xl font-extrabold text-violet-600 tracking-tight">
          DigiTools
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-medium text-gray-600">
          <li><a className="hover:text-violet-600 transition-colors rounded-lg">Products</a></li>
          <li><a className="hover:text-violet-600 transition-colors rounded-lg">Features</a></li>
          <li><a className="hover:text-violet-600 transition-colors rounded-lg">Pricing</a></li>
          <li><a className="hover:text-violet-600 transition-colors rounded-lg">Testimonials</a></li>
          <li><a className="hover:text-violet-600 transition-colors rounded-lg">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <a className="hidden sm:block font-medium text-gray-700 hover:text-violet-600 cursor-pointer transition-colors">
          Login
        </a>
        <div className="relative">
          <button onClick={onCartClick} className="btn btn-ghost btn-circle text-gray-700 hover:text-violet-600">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-5 text-sm font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
