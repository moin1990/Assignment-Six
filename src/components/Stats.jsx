import React from "react";

const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-violet-600 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-violet-400">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white py-4">
              <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-violet-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
