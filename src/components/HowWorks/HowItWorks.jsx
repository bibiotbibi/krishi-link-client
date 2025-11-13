import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Leaf, MessageCircle, Handshake } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10   h-10 text-green-600" />,
    title: "Sign Up  or Log In",
    text: "Create your free account using your email or phone number.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Browse Crops and Products",
    text: "Explore all available crops, fertilizers, and tools easily.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-green-600" />,
    title: "Connect with Farmers or Buyers",
    text: "Chat or call directly with sellers and buyers through the app.",
  },
  {
    icon: <Handshake className="w-10  h-10 text-green-600" />,
    title: "Buy, Sell & Grow Together",
    text: "Make secure deals and expand your farming network.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2   
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-green-800 mb-10"
        >
          🌾 How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
