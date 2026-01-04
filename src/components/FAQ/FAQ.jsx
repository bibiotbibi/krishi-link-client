import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How do I create an account?",
    answer: "Click on the 'Register' button on the top-right corner and fill in your details to create an account.",
  },
  {
    question: "How can I order crops?",
    answer: "Browse the market, select the crops you want, and proceed to checkout with your preferred payment method.",
  },
  {
    question: "What is the return policy?",
    answer: "You can request a return within 7 days of receiving the products if they are damaged or incorrect.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach out via the 'Help Center' link in the footer or email us at support@krishilink.com.",
  },
  {
    question: "Are deliveries free?",
    answer: "Free delivery is available for orders above $50. For smaller orders, a nominal delivery fee applies.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="bg-green-50 pb-20 pt-30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <div
                className={`px-6 pb-4 text-gray-700 transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0 overflow-hidden"
                }`}
              >
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
