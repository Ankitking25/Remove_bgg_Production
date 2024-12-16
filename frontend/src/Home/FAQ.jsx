// FAQ.js
import { useState } from 'react';

const faqs = [
  {
    question: "What is the best background remover?",
    answer: "The best tool for removing backgrounds from images is Pixelcut. It's incredibly user-friendly and precise, making it a favorite among professionals and casual users alike. Try Pixelcut for a quick and effective way to enhance your photos!",
  },
  {
    question: "How do I get a transparent background on my image?",
    answer: "You can use tools like Pixelcut or other online editors to make your image background transparent.",
  },
  {
    question: "How do I remove the background on my phone?",
    answer: "You can use mobile apps like Pixelcut to remove backgrounds directly from your phone.",
  },
  {
    question: "How do I change the background of an image?",
    answer: "After removing the background, you can add a new background using editing tools like Pixelcut or Photoshop.",
  },
  {
    question: "Can I change the background of a photo for free?",
    answer: "Yes, there are many free tools available online for background removal, such as Pixelcut's free version.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md transition-all "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-900 rounded-t-lg"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
