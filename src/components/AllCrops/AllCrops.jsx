import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceSort, setPriceSort] = useState(""); // "low" or "high"

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Combined filter + sort
  useEffect(() => {
    let filtered = crops;

    if (searchTerm) {
      filtered = filtered.filter((crop) =>
        crop.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((crop) => crop.category === categoryFilter);
    }

    if (priceSort === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCrops([...filtered]);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchTerm, categoryFilter, priceSort, crops]);

  if (loading) return <p className="text-center mt-10">Loading crops...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCrops = filteredCrops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCrops.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [...new Set(crops.map((crop) => crop.category))];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">All Crops</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search crops..."
          className="input input-bordered flex-1 min-w-0 w-full max-w-3xl"
        />

        <div className="flex gap-3 w-full max-w-md">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input input-bordered flex-1 min-w-0"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="input input-bordered flex-1 min-w-0"
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      {/* Crop Cards */}
      {currentCrops.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl mt-10">
          No results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentCrops.map((crop) => (
            <div
              key={crop._id}
              className="card bg-base-100 shadow-xl rounded-xl overflow-hidden transition-transform duration-200 hover:scale-101"
            >
              <figure>
                <img
                  src={crop.image}
                  alt={crop.title}
                  className="w-full h-60 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{crop.title}</h2>
                <p className="text-gray-700 line-clamp-3">{crop.description}</p>
                <p className="font-semibold text-green-700 mt-2">
                  Price: ${crop.price}
                </p>
                <p>Quantity: {crop.quantity}</p>
                <Link
                  className="bg-primary btn text-white mt-2"
                  to={`/cropdetails/${crop._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`btn btn-sm ${
                  currentPage === number ? "btn-primary text-white" : "btn-outline"
                }`}
              >
                {number}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
