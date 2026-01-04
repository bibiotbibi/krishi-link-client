import React, { useEffect, useState } from 'react';
import Crop from '../Crop/Crop';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://krishi-link-server-flax.vercel.app/latest-crops')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch crops');
        return res.json();
      })
      .then(data => setCrops(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-xl">Loading crops...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className='mx-auto w-11/12'>
      <h2 className='text-5xl text-primary border-r-2 mx-auto w-3/12 border-b-2 border-b-primary font-bold m-15 shadow-xl'>
        ☁️ Latest Crops
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {crops.map(crop => (
          <Crop key={crop._id} crop={crop} />
        ))}
      </div>

      
    </div>
  );
};

export default LatestCrops;
