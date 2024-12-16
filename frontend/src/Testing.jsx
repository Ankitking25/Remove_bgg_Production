import React from "react";

export function Testing() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header Section */}
      <header className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-12">
          <h1 className="text-4xl md:text-5xl font-bold">Remove Background in a Click</h1>
          <p className="mt-4 text-lg md:text-xl">Using AI and Machine Learning to provide the fastest, most cost-effective background removal service.</p>
        </div>
      </header>

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

        {/* Call to Action */}
        <section className="bg-gray-800 text-white text-center py-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Removing Backgrounds Today</h3>
          <p className="mb-6">Experience the future of image processing with our affordable, fast, and easy-to-use service.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg">Get Started</button>
        </section>
      </main>

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

