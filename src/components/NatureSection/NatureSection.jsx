import React from "react";
import { Leaf, Truck, ShieldCheck } from "lucide-react";

const NatureSection = () => {
  return (
    <section  id="features"  className="bg-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/whj1WCBC/plank-png.png"
            alt="Fresh Plant"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Infuse your home <br /> with natural beauty
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            KrishiLink connects farmers and consumers through fresh,
            sustainable agricultural products delivered with care.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">

            <div className="flex items-start gap-4 bg-secondary text-white p-5 rounded-xl shadow">
              <ShieldCheck className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">Exceptional quality</h4>
                <p className="text-sm text-green-100">
                  Directly sourced from trusted farmers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-secondary text-white p-5 rounded-xl shadow">
              <Truck className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">Safe home delivery</h4>
                <p className="text-sm text-green-100">
                  Fast and reliable delivery at your doorstep.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-secondary text-white p-5 rounded-xl shadow">
              <Leaf className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-lg">Incorporate nature daily</h4>
                <p className="text-sm text-green-100">
                  Healthy lifestyle with fresh farm products.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NatureSection;
