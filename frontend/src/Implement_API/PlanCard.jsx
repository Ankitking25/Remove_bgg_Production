import React from 'react';

export function PlanCard({ title, price, features }){
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Plan Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

      {/* Price */}
      <p className="text-4xl font-bold text-blue-600 mb-6">{price}</p>

      {/* Features List */}
      <ul className="space-y-3 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-blue-600 mr-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20z"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
        Buy Now
      </button>
    </div>
  );
};


