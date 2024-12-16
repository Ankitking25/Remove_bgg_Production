import React from 'react';
import test1 from './../Image/test1.jpg'
import test2 from './../Image/test2.jpg'
import test3 from './../Image/test3.jpg'
import test5 from './../Image/test5.jpg'
export function ProductShowcase1() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Advanced Background Remover Tool</h2>
        
        {/* Section 1: Text on the left, Image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Remove Background in Seconds</h3>
            <p className="text-gray-600 text-lg">
              Our AI-powered background remover delivers transparent images in seconds. Say goodbye to manual editing.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={test1} alt="Product 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 2: Image on the left, Text on the right */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Add Custom Backgrounds</h3>
            <p className="text-gray-600 text-lg">
              Choose from thousands of curated backgrounds or keep your image transparent for a professional look.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={test5} alt="Product 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 3: Text on the left, Image on the right */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">HD Quality Cutouts</h3>
            <p className="text-gray-600 text-lg">
              Achieve professional-grade cutouts with our HD quality background remover, perfect for high-resolution needs.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={test2} alt="Product 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 4: Image on the left, Text on the right */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Simple Editing Tools</h3>
            <p className="text-gray-600 text-lg">
              Easily adjust, enhance, and customize your cutout images with intuitive editing tools.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={test3} alt="Product 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
