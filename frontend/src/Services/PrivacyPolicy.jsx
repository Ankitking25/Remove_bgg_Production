import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function PrivacyPolicy() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };



  const navigate = useNavigate();



  const HandleSubmit = ()=>{
    //but wait for 2 second;
  
 
    setTimeout(()=>{
        navigate('/');
    },1500);

  }





  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsClosing(true); 
        setTimeout(() => setIsSubmitted(false), 1000); 
      }, 1000); 
    } else {
      alert("Please accept our Privacy Policy to proceed.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 font-sans mt-20">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-lg">Your Privacy is Our Priority</p>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-6 py-12 space-y-12">
        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Your Privacy is Secure with Us</h2>
          <p className="text-base">
            At RemoveBgg, we understand the importance of your privacy. We are committed to ensuring that your personal information
            remains safe and secure. We employ the latest technology to safeguard your data, using state-of-the-art encryption and
            decryption systems to prevent unauthorized access.
          </p>
          <p className="text-base">
            Our platform uses the best security practices to ensure your images and personal data are protected throughout the entire
            background removal process. You can trust that your data is handled with the utmost care.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Why You Can Trust Us</h2>
          <p className="text-base">
            We believe in transparency and security, which is why we use the most advanced technologies available to protect your
            personal information. Your privacy is not just a policy for us—it's a commitment.
          </p>
          <p className="text-base">
            We continuously update our tools and services to ensure they remain secure and user-friendly. By using our platform, 
            you can rest assured that we are always improving our security measures to meet the highest standards.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Stay Secure, Stay Protected</h2>
          <p className="text-base">
            We understand the importance of future-proofing security. Our platform is built with cutting-edge technology and we
            constantly enhance our security features to keep your data safe. By using our tools, you can be confident that your
            personal data is always protected.
          </p>
          <p className="text-base">
            Thank you for choosing RemoveBgg, where security and trust come first.
          </p>
        </section>

        {/* Privacy Policy Agreement Form */}
        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Accept Our Privacy Policy</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="acceptPolicy"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-5 w-5"
              />
              <label htmlFor="acceptPolicy" className="text-base">
                I have read and accept the <span className="text-blue-500 hover:underline">Privacy Policy</span>.
              </label>
            </div>
            <button
              type="submit"
              className={`px-6 py-2 text-white font-semibold rounded-md ${isChecked ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!isChecked}
              onClick={HandleSubmit}
            >
              Submit
            </button>
          </form>
        </section>

        {/* Success Notification */}
        {isSubmitted && (
          <div
            className={`w-full z-10 fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-100 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl ${
              isClosing ? 'h-12' : 'h-20'
            }`}
          >
            <p className="text-lg font-semibold">Thank you for accepting</p>
           
            {/* Line shrinking effect */}
            <div
              className={`absolute bottom-0 left-0 w-full h-1 bg-white transform transition-all duration-500 ${isClosing ? 'w-0' : 'w-full'}`}
            />
          </div>
        )}
      </main>

   
    </div>
  );
}
