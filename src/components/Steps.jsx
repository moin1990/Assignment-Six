import React from "react";
import { FiUserPlus, FiPackage, FiZap } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiUserPlus size={32} className="text-violet-400" />,
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: <FiPackage size={32} className="text-violet-400" />,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: <FiZap size={32} className="text-violet-400" />,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-base">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-dashed border-t-2 border-dashed border-violet-100 z-0"></div>
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-violet-300">
                  {step.number}
                </div>

                {/* Icon circle */}
                <div className="w-24 h-24 mx-auto rounded-full bg-violet-50 border-2 border-violet-100 flex items-center justify-center mb-5 group-hover:bg-violet-100 group-hover:border-violet-200 transition-all duration-300 group-hover:scale-105">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
