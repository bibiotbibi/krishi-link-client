import React from 'react';

const StayUp = () => {
    return (
        <div>

             <section className="bg-green-200 py-12 px-4 text-center rounded-xl border-2 border-primary my-8 ">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Stay Updated</h2>
      <p className="text-green-700 mb-6">
        Subscribe to our newsletter and get the latest farming tips, crop updates, and marketplace news.
      </p>
      
        <input type="email" placeholder="Enter your email"
          className="px-4 py-2 rounded-md border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-700 transition" >
          Subscribe
        </button>
     
    </section>
        </div>
    );
};

export default StayUp;