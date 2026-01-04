import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, ChevronsDown } from "lucide-react";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/rGNCv4G5/5-Machine-Learning-Models-for-Frost-Forecasting.png",
      title: "Bring Nature Home",
      text: "Transform your space with fresh crops and trusted farmers.",
    },
    {
      image: "https://i.ibb.co/mVwdBBw2/Spring-is-Here-Zone-8-10-Gardening-Advice.png",
      title: "Fields of Opportunity",
      text: "Discover fertile lands and connect with growers.",
    },
    {
      image: "https://i.ibb.co/T5M5DLm/Arroz-dorado.jpg",
      title: "Sustainable Agriculture",
      text: "Support eco-friendly farming for a greener future.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="relative h-[70vh] max-h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides[current] && (
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-3xl text-white">
        {slides[current] && (
          <>
            <motion.h1
              key={slides[current].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              key={slides[current].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-6"
            >
              {slides[current].text}
            </motion.p>
            <Link
              to="/allcrops"
              className="inline-block border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Market
            </Link>
          </>
        )}
      </div>

      {/* Manual Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8">
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronsDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Banner;
