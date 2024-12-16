import React from "react";

import { useNavigate } from "react-router-dom";
export function Blog() {

    const navigate = useNavigate();


    const handleStart=()=>{
        navigate('/')
    }

  return (
    <div className="font-sans bg-gray-50">
      {/* Enhanced "Start Removing Backgrounds Today" Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 px-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Start Removing Backgrounds Today
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Experience the future of image processing with our affordable, fast, and easy-to-use service. With just a few clicks, you can remove backgrounds from any image instantly. Say goodbye to tedious manual work and embrace the power of AI.
          </p>
         
          <button onClick={handleStart} className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none">
            Get Started
          </button>

         
        </div>
      </section>

      {/* Header Section */}
    


      {/* Main Content Section */}
      <main className="px-6 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">How We Work</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed mb-6">
              Our platform uses cutting-edge artificial intelligence and machine learning algorithms to remove image backgrounds in seconds. Whether you need an image for e-commerce, presentations, or social media, we provide a simple and affordable solution.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We focus on delivering fast results with a seamless API that can be integrated into any workflow.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Custom Image Resizing</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed mb-6">
              You can easily download your background-free image in the resolution that suits your needs. Our platform allows you to select the pixel size or change units like millimeters, centimeters, or inches. It's simple and user-friendly, providing you with the flexibility to download images for all your personal or business requirements.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Just upload your image, adjust the dimensions, and download it in your preferred unit. It's as easy as that!
            </p>
          </div>
        </section>
      </main>


      <section className="relative bg-gray-100 py-16 px-6">
        <div className="absolute inset-x-0 bottom-0 bg-white h-24 clip-path-bottom"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Our service is powered by the latest AI and Machine Learning technology, ensuring that background removal is faster, more accurate, and affordable. We provide you with high-quality, clean images in just seconds. Whether you're a photographer, an e-commerce store, or an individual, we’ve got you covered with the most cost-effective solutions.
          </p>
        </div>
      </section>


      <header className="bg-cover bg-center h-96 relative">
  <div className="absolute inset-0 bg-gray-900"></div>
  <div className="relative z-10 text-center text-white p-8">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
      Remove Background in a Click
    </h1>
    <p className="mt-2 text-lg md:text-xl max-w-3xl mx-auto">
      Using AI and Machine Learning, we provide the fastest and most cost-effective background removal service. Get results in seconds with a simple, user-friendly interface.
    </p>
  </div>
</header>






      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="text-center">
          <p>© 2024 RemoveBgg. All Rights Reserved.</p>
          <p className="text-sm">Powered by AI & Machine Learning</p>
        </div>
      </footer>
    </div>
  );
}
