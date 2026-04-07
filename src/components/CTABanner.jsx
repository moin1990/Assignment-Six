import React from "react";

const CTABanner = () => {
  return (
    <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 py-20 px-6 text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-violet-200 text-base mb-8 max-w-xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button className="btn bg-white text-violet-700 hover:bg-violet-50 border-none rounded-full px-8 font-bold">
            Explore Products
          </button>
          <button className="btn btn-ghost text-white border border-white/30 hover:bg-white/10 rounded-full px-8 font-bold">
            View Pricing
          </button>
        </div>

        <p className="text-violet-300 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
