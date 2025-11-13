import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const Crop = ({crop}) => {
    const {_id, image, title,category, status, price} = crop;
    return (
         
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3, ease: "easeOut" }} >
      <figure>
        <img src={image} alt={title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
      </figure>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="badge badge-secondary">{category}</div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-green-700">${price}</p>
          <div className="badge badge-outline">{status}</div>
        </div>
      </div>
    </motion.div>
    );
};

export default Crop;