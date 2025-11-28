import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    setLoading(true);
    fetch("https://krishi-link-server-flax.vercel.app/products")
      .then((res) => res.json())
      .then((res) => {
        setCrops(res);
        setFilteredCrops(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch crops");
        setLoading(false);
      });
  }, []);

  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term) {
      setFilteredCrops(crops); 
      return;
    }

    const filtered = crops.filter((crop) =>
      crop.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCrops(filtered);
  };

  if (loading) return <p className="text-center mt-10">Loading crops...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center my-10">All Crops</h1>

    
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search crops..."
          className="input input-bordered w-full max-w-md"
        />
      </div>

     
      {filteredCrops.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl mt-10">
          No results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCrops.map((crop) => (
            <div key={crop._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={crop.image}
                  alt={crop.title}
                  className="w-full h-65 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{crop.title}</h2>
                <p>{crop.description}</p>
                <p>
                  Price: ${crop.price} 
                </p>
                <p>Quantity: {crop.quantity}</p>
                <Link
                  className="bg-primary btn text-white"
                  to={`/cropdetails/${crop._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
