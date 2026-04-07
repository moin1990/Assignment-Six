import React from "react";
import { FiPlay } from "react-icons/fi";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-white py-14 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <br />
            <span className="text-violet-600">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
          </p>

          <p className="text-violet-600 font-medium text-sm cursor-pointer hover:underline">
            Explore Products →
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none rounded-full px-6 font-semibold">
              Explore Products
            </button>
            <button className="btn btn-ghost border border-gray-200 rounded-full px-5 gap-2 text-gray-700 hover:bg-gray-50 font-semibold">
              <FiPlay className="text-violet-600" size={16} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-purple-300 rounded-3xl blur-3xl opacity-40 transform scale-95"></div>
            <div className="relative bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={bannerImg}
                alt="Digital Workflow"
                className="w-full h-72 object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
