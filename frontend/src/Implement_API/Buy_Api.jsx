import React from 'react';
import {PlanCard} from './PlanCard';
export function Buy_Api(){
  const plans = [
    {
      title: "Basic Plan",
      price: "$25.99/month",
      features: ["7,000 API requests/month", "Basic support", "1000 API Call Per hours"],
    },
    {
      title: "Small Scale Business",
      price: "$70.99/month",
      features: ["50,000 API requests/month", "Priority support", "50 API Call Per Second"],
    },
    {
      title: "Industry Level",
      price: "$250.99/month",
      features: [
        "200,000 API requests/month",
        "24/7 support",
        "110     API Call Per Minutes",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mt-12">
      {/* Header Section */}

      {/* <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our API?</h2>
        <p className="text-gray-700 mb-4">
          Our API offers fast, reliable, and secure connections for your business needs. Scale seamlessly and ensure that your business runs smoothly with our robust solutions.
        </p>
        <div className="flex justify-center space-x-12">
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Performance</h3>
            <p className="text-gray-600">
              High-speed API responses with low latency, ensuring your applications run smoothly.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Scalable</h3>
            <p className="text-gray-600">
              Our API scales to meet the growing needs of your business, no matter how big or small.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Reliable Support</h3>
            <p className="text-gray-600">
              Get 24/7 dedicated support to ensure you always have the help you need.
            </p>
          </div>
        </div>
      </section> */}


<section className="bg-blue-100 py-16 text-center">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Our API?</h2>
  <p className="text-gray-700 mb-4">
    Our API offers fast, reliable, and secure connections for your business needs. Scale seamlessly and ensure that your business runs smoothly with our robust solutions.
  </p>

  {/* Card Container */}
  <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
    
    {/* Fast Performance Card */}
    <div className="max-w-xs w-full p-6 bg-black text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4">Fast Performance</h3>
      <p className="text-gray-300">
        High-speed API responses with low latency, ensuring your applications run smoothly.
      </p>
    </div>
    
    {/* Scalable Card */}
    <div className="max-w-xs w-full p-6 bg-black text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4">Scalable</h3>
      <p className="text-gray-300">
        Our API scales to meet the growing needs of your business, no matter how big or small.
      </p>
    </div>

    {/* Reliable Support Card */}
    <div className="max-w-xs w-full p-6 bg-white text-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4">Reliable Support</h3>
      <p className="text-gray-600">
        Get 24/7 dedicated support to ensure you always have the help you need.
      </p>
    </div>
    
  </div>
</section>


      


      {/* <header className="bg-blue-600 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Buy API Plans</h1>
        <p className="text-lg">Choose the best plan that fits your business needs</p>
      </header> */}


<header className="bg-blue-600  text-center text-white flex justify-center items-center h-10 mt-12">
  <div className="w-11/12 md:w-7/12 lg:w-7/12 bg-blue-600 rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:bg-blue-700 hover:scale-105">
    <h1 className="text-4xl font-extrabold mb-4">Buy API Plans</h1>
    <p className="text-lg">Choose the best plan that fits your business needs</p>
  </div>
</header>


 
  
   
   



      {/* Main Content */}
      <main className="flex-1 py-12 px-6 lg:px-16">
        {/* <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Plans</h2>
          <p className="text-gray-600 text-lg mt-2">
            Select a plan that suits your business size and requirements.
          </p>
        </section> */}
         

         




        {/* Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </main>

      {/* Footer Section */}


    

    

      {/* Call to Action (CTA) Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Choose a plan that fits your business needs and start integrating today. Our API is easy to use and provides powerful tools to enhance your operations.
        </p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
          Buy Now
        </button>
      </section>
  


     
    </div>
  );
};


