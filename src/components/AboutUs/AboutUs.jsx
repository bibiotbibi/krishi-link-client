import React from "react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <section id="about" className="bg-green-50 max-h-[70vh] ">

      {/* About Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/Z60nBKMX/Ukraine-s-Agri-Sector-20-of-GDP-1-in-5-Employed-Opportunities-for-Investors.png"
            alt="About Us"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About KrishiLink
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            KrishiLink is dedicated to connecting farmers directly with buyers,
            offering fresh and sustainable agricultural products. We empower
            local farmers and ensure transparency in agricultural trading.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is to make agriculture more accessible, reliable, and
            profitable for both farmers and consumers while supporting a
            greener future.
          </p>

          <Link
            to="/allcrops"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

    
    </section>
  );
};

export default AboutUs;
