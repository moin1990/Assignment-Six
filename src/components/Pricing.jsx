import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    badge: "Most Popular",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-extrabold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2.5 text-sm ${plan.highlighted ? "text-violet-100" : "text-gray-600"}`}>
                    <FiCheck
                      size={15}
                      className={`flex-shrink-0 ${plan.highlighted ? "text-violet-200" : "text-violet-500"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn rounded-full border-none font-bold w-full ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 hover:bg-violet-700 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
