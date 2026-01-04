import React from "react";
import { Link } from "react-router";

const Crop = ({ crop }) => {
  const { _id, image, title, category,  price } = crop;

  return (
<Link to={`/cropdetails/${crop._id}`}>
  <div className="relative bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden w-full max-w-sm mx-auto group cursor-pointer">

    {/* Image */}
    <figure className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-34 object-cover rounded-t-2xl"
      />

      {/* Category Badge */}
      <span className="absolute text-black top-3 right-3 shadow-2xl badge badge-secondary">
        {category}
      </span>
    </figure>

    {/* Content */}
 <div className="p-6 relative z-10 flex flex-col gap-4">
  {/* Title */}
  <h2 className="font-semibold text-gray-800">
    {title}
  </h2>

  {/* Price + Button */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
    <p className="text-xl font-semibold text-green-700 text-center sm:text-left">
      ${price}
    </p>

    <button
      onClick={(e) => {
        e.preventDefault();
        // addToCart(crop);
      }}
      className="btn btn-sm bg-primary text-white w-full sm:w-auto"
    >
      Details
    </button>
  </div>
</div>


  </div>
</Link>


  );
};

export default Crop;
