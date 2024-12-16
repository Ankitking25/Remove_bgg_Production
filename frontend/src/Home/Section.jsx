import React from 'react';

export function Section() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-gray   -700 py-16 px-6 text-gray-100 rounded-b-2xl shadow-lg">
      <div className=" mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Effortlessly Remove Backgrounds from Your Images
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Step 1 */}
          <div className="bg-indigo-500 hover:bg-indigo-400 transition transform hover:-translate-y-2 rounded-xl p-8 text-left shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">1. Upload Your Image</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Select a JPG, PNG, or HEIC file. For best results, choose an image with well-defined edges.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-indigo-500 hover:bg-indigo-400 transition transform hover:-translate-y-2 rounded-xl p-8 text-left shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">2. Automatic Background Removal</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our AI tool removes the background for you. Fine-tune the cutout with easy-to-use tools.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-indigo-500 hover:bg-indigo-400 transition transform hover:-translate-y-2 rounded-xl p-8 text-left shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">3. Download Your Edited Image</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Save your new image or continue editing with more customizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
