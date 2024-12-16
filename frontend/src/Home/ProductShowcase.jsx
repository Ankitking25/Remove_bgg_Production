import React from 'react';
import test1 from './../Image/test1.jpg'
export function ProductShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Advanced Background Remover Tool</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Product 1 */}
          <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Remove Background in Seconds</h3>
              <p className="text-gray-600 mb-4">
               Use our AI-powered background remover for fast, transparent images in seconds.
              </p>
            </div>
            <img src={test1} alt="Product 1" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          </div>
        
          {/* Product 2 */}
          <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Custom Backgrounds</h3>
              <p className="text-gray-600 mb-4">
                Choose from thousands of custom backgrounds or keep a transparent one.
              </p>
            </div>
            <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">HD Quality Cutouts</h3>
              <p className="text-gray-600 mb-4">
                Achieve professional-grade cutouts with our HD quality background remover.
              </p>
            </div>
            <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Simple Editing Tools</h3>
              <p className="text-gray-600 mb-4">
                Adjust, enhance, and customize your cutout images with our easy editing tools.
              </p>
            </div>
            <img src="https://via.placeholder.com/300" alt="Product 4" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
