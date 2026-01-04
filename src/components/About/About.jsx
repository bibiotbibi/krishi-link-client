import React from "react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import FAQ from "../FAQ/FAQ";

const About = () => {
  return (
    <section className="bg-green-50 md:mx-15">
      <Navbar />

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

      {/* FAQ */}
      <FAQ />

      {/* Privacy Policy */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Privacy Policy
        </h2>

        <p className="text-gray-700 mb-4">
          At KrishiLink, we value your privacy. We collect only necessary
          information such as name, email, and activity data to provide better
          services.
        </p>

        <p className="text-gray-700 mb-4">
          Your personal data is never sold or shared with third parties without
          consent. All data is securely stored and used solely for platform
          functionality.
        </p>

        <p className="text-gray-700">
          By using KrishiLink, you agree to our privacy practices described
          above.
        </p>
      </div>

      {/* Terms & Conditions */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Terms & Conditions
        </h2>

        <p className="text-gray-700 mb-4">
          By accessing and using KrishiLink, you agree to follow our rules and
          guidelines. Users are responsible for the accuracy of information
          they provide.
        </p>

        <p className="text-gray-700 mb-4">
          Farmers must ensure that crop details are correct. Buyers are
          expected to communicate respectfully and complete transactions
          fairly.
        </p>

        <p className="text-gray-700">
          KrishiLink reserves the right to update these terms at any time to
          improve service quality and platform security.
        </p>
      </div>
      <div className="text-center text-sm text-gray-500 border-t py-4">
        © {new Date().getFullYear()} KrishiLink. All rights reserved.
      </div>
    </section>
  );
};

export default About;
