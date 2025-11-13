import React from 'react';

const Story = () => {
    return (
        <div>
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
      
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/9m3N6RH0/download-no.jpg"
              alt=""
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Rahim Uddin</h3>
            <p className="text-sm text-gray-500 mb-2">Tomatoes Farmer</p>
            <p className="text-gray-700">
              Selling 500kg of tomatoes directly to buyers changed my income completely!
            </p>
          </div>

     
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/9m3N6RH0/download-no.jpg"
              alt=""
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Sumon Hossain</h3>
            <p className="text-sm text-gray-500 mb-2">Rice Farmer</p>
            <p className="text-gray-700">
              I got multiple buyers in a week! Connecting with trusted customers was easy.
            </p>
          </div>

         
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co.com/9m3N6RH0/download-no.jpg"
              alt=""
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Fatema Begum</h3>
            <p className="text-sm text-gray-500 mb-2">Potato Farmer</p>
            <p className="text-gray-700">
              I learned how to price my crops fairly and sell quickly. Highly recommended!
            </p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Story;