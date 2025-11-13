import React from "react";

const AgroNews = () => {
  return (
    <section className="my-12 px-4 md:px-10">
      <h2 className="text-4xl font-bold py-10 text-center mb-8">
        🌿 Agro News & Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition">
          <figure>
            <img
              src="https://i.ibb.co.com/gZSfcsQ5/The-Importance-of-AI-in-Modern-Farming.jpg"
              alt="Modern Irrigation Systems Transforming Farming"
              className="h-56 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg font-semibold">
              Modern Irrigation Systems Transforming Farming
            </h3>
            <p className="text-sm text-gray-500 mb-2">📅 November 1, 2025</p>
            <p className="text-gray-700">
              Learn how smart irrigation and IoT devices are revolutionizing crop
              management and water usage efficiency in agriculture.
            </p>
            <div className="card-actions justify-end mt-3">
              <p className="btn btn-outline btn-success btn-sm">
                Read More
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition">
          <figure>
            <img
              src="https://i.ibb.co.com/sJC8ywHp/Organic-Fertilizers-over-Traditional-Fertilizer-Organic-Farming-Ozone-Biotech.jpg"
              alt="Organic Fertilizers: A Step Toward Sustainable Agriculture"
              className="h-56 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg font-semibold">
              Organic Fertilizers: A Step Toward Sustainable Agriculture
            </h3>
            <p className="text-sm text-gray-500 mb-2">📅 October 28, 2025</p>
            <p className="text-gray-700">
              Explore the benefits of using organic fertilizers to improve soil
              fertility and reduce harmful chemical usage.
            </p>
            <div className="card-actions justify-end mt-3">
              <p className="btn btn-outline btn-success btn-sm">
                Read More
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition">
          <figure>
            <img
              src="https://i.ibb.co.com/C5NRFK2t/Times-Science-Fiction-Movies-Accurately-Predicted-Future-Technology.jpg"
              alt="Bangladesh Farmers Embrace AgriTech Startups"
              className="h-56 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg font-semibold">
              Bangladesh Farmers Embrace AgriTech Startups
            </h3>
            <p className="text-sm text-gray-500 mb-2">📅 November 5, 2025</p>
            <p className="text-gray-700">
              AgriTech startups are helping Bangladeshi farmers increase
              productivity and get better market prices.
            </p>
            <div className="card-actions justify-end mt-3">
              <p className="btn btn-outline btn-success btn-sm">
                Read More
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgroNews;
