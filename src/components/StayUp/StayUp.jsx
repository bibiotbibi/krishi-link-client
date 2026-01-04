import React, { useState } from "react";
import { Users, X } from "lucide-react";
const StayUp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Join Section ===== */}
      <section
        id="join"
        className="bg-primary text-white py-20 px-6 rounded-2xl my-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join KrishiLink Today 🌱
          </h2>

          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Connect directly with trusted farmers and buyers.  
            Fresh crops, fair prices, and a smarter agriculture platform.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-primary px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:bg-primary transition"
          >
            <Users size={20} />
            Join KrishiLink
          </button>
        </div>
      </section>

      {/* ===== Modal ===== */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold text-center text-primary mb-4">
              Join KrishiLink
            </h3>

            <p className="text-center text-gray-600 mb-6">
              Choose how you want to join our platform
            </p>

            <div className="space-y-4">
              <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition">
                Join as Farmer 🌾
              </button>

              <button className="w-full bg-secondary text-primary py-3 rounded-xl font-semibold hover:bg-primary transition">
                Join as Buyer 🛒
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StayUp;