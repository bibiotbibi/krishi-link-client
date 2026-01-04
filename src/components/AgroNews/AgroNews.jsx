import React, { useState } from "react";

const AgroNews = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Modern Irrigation Systems Transforming Farming",
      date: "📅 November 1, 2025",
      image: "https://i.ibb.co.com/gZSfcsQ5/The-Importance-of-AI-in-Modern-Farming.jpg",
      summary:
        "Learn how smart irrigation and IoT devices are revolutionizing crop management and water usage efficiency in agriculture.",
      full:
        "Full Article: Smart irrigation systems combined with IoT sensors allow farmers to monitor soil moisture, detect crop stress early, and optimize water usage. This reduces water waste, lowers costs, and increases yields. Modern systems can even automate irrigation based on weather forecasts, soil data, and crop type."
    },
    {
      id: 2,
      title: "Organic Fertilizers: A Step Toward Sustainable Agriculture",
      date: "📅 October 28, 2025",
      image: "https://i.ibb.co.com/sJC8ywHp/Organic-Fertilizers-over-Traditional-Fertilizer-Organic-Farming-Ozone-Biotech.jpg",
      summary:
        "Explore the benefits of using organic fertilizers to improve soil fertility and reduce harmful chemical usage.",
      full:
        "Full Article: Organic fertilizers improve soil structure, retain moisture, and encourage beneficial microorganisms. Unlike chemical fertilizers, they reduce pollution and maintain soil health long-term. Transitioning to organic fertilizers helps promote sustainable agriculture and a healthier environment."
    },
    {
      id: 3,
      title: "Bangladesh Farmers Embrace AgriTech Startups",
      date: "📅 November 5, 2025",
      image: "https://i.ibb.co.com/C5NRFK2t/Times-Science-Fiction-Movies-Accurately-Predicted-Future-Technology.jpg",
      summary:
        "AgriTech startups are helping Bangladeshi farmers increase productivity and get better market prices.",
      full:
        "Full Article: AgriTech startups provide farmers with access to advanced technology, real-time market data, and better supply chain networks. Farmers are now able to increase productivity, reduce crop loss, and negotiate fair prices. These startups are transforming the agricultural ecosystem in Bangladesh."
    }
  ];

  const toggleCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="blog-section" className="mb-1 px-4 md:px-10">
      <h2 className="text-4xl font-bold py-10 text-center mb-8">
         Agro News & Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-gray-700">
                {expandedCardId === blog.id ? blog.full : blog.summary}
              </p>
              <div className="card-actions justify-end mt-3">
                <button
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={() => toggleCard(blog.id)}
                >
                  {expandedCardId === blog.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgroNews;
