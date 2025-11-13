import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/DfVpYCyF/5-Ways-to-Create-an-Energy-Efficient-Garden.jpg",
      title: "Growing Together",
text: "Empowering farmers to cultivate fresh produce and connect through a trusted marketplace."

    },
    {
      image:
        "https://i.ibb.co.com/Qvqz9z3F/Vibrant-sunset-over-a-picturesque-agricultural-landscape-with-rows-of-young-crops-Premium-AI-generat.jpg",
      title: "Fields of Opportunity",
text: "Explore fertile lands, nurture crops, and connect with a community of thriving farmers."

    },
     {
      image:
        "https://i.ibb.co.com/T5M5DLm/Arroz-dorado.jpg",
      title: "Sustainable Agriculture",
      text: "Support eco-friendly farming and help build a greener future.",
    },
    
    {
      image:
        "https://i.ibb.co.com/PvV4c3W8/Assortment-of-fresh-vegetables-a-vibrant-still-life-Premium-AI-generated-image.jpg",
      title: "Fresh From the Farm",
      text: "Buy directly from local farmers and enjoy fresh, organic produce every day.",
    },
   
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].image}
          src={slides[current].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={slides[current].text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mb-6 text-lg"
        >
          {slides[current].text}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
