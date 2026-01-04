import React from "react";
import { Link } from "react-router";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: ["View crops", "Limited access"],
    popular: false,
    route: "/login",
  },
  {
    name: "Pro",
    price: "$10/mo",
    features: ["Full access", "Priority delivery", "Connect with 10 farmers"],
    popular: true,
    route: "/subscribe/pro",
  },
  {
    name: "Premium",
    price: "$20/mo",
    features: [
      "Unlimited access",
      "Analytics dashboard",
      "Priority support",
      "Featured crops",
    ],
    popular: false,
    route: "/subscribe/premium",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pt-16 pb-10 bg-green-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
           Pricing Plans
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all text-center
             `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 text-sm rounded-full">
                  Most Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>

              {/* Price */}
              <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-secondary font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Clickable Button */}
              <Link
                to={plan.route}
                className="inline-block px-6 py-2 rounded-full font-semibold transition bg-primary text-white hover:opacity-90" 
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
