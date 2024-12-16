import React from 'react';
import { AiOutlineSmile, AiOutlineMobile } from 'react-icons/ai';
import { FaStar, FaCode } from 'react-icons/fa';

export function TrustSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 px-6 text-center md:text-left">
        
        {/* Trusted by 30 million */}
        <div className="flex items-center space-x-2">
          <AiOutlineSmile className="text-2xl text-gray-700" />
          <p className="text-lg md:text-xl font-medium text-gray-800">Trusted by 30 million people</p>
        </div>

        {/* 5-star Reviews */}
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-lg md:text-xl font-medium text-gray-800">171,800 Reviews</p>
        </div>

        {/* Developer API */}
        <div className="flex items-center space-x-2">
          <FaCode className="text-2xl text-gray-700" />
          <p className="text-lg md:text-xl font-medium text-gray-800">Developer API</p>
        </div>

        {/* Available on iPhone & Android */}
        <div className="flex items-center space-x-2">
          <AiOutlineMobile className="text-2xl text-gray-700" />
          <p className="text-lg md:text-xl font-medium text-gray-800">Available on iPhone & Android</p>
        </div>



      
      </div>

    

    </section>
  );
}
