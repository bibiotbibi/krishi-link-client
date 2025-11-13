import React, { useEffect, useState } from 'react';
import Crop from '../Crop/Crop';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/latest-crops')
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
      <h2 className='text-6xl text-primary border-r-2 mx-auto w-5/12 border-b-2 border-b-primary font-bold m-15 shadow-xl'>
        ☁️ Latest Crops
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {crops.map(crop => (
          <Crop key={crop._id} crop={crop} />
        ))}
      </div>

      <Link className="bg-primary btn md:w-2/12 w-full text-center  mx-auto md:mx-140 text-white p-7 text-2xl my-20" to="allcrops">
        All Crops
      </Link>
    </div>
  );
};

export default LatestCrops;
