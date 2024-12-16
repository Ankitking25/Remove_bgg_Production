// ReviewSection.js
import React from 'react';

const reviews = [
  {
    title: "My favorite app",
    content: "Great app, easy to use. Helps our small business save time and money to create different marketing materials professionally. Thank you.",
    author: "Shaelyn D.",
  },
  {
    title: "Best background remover",
    content: "I need a good background remover for my work and I've been through them all it feels like. This one is the best by far. It's so easy to use and the results always look amazing. Thank you Pixelcut!",
    author: "Kira H.",
  },
  {
    title: "Love it",
    content: "It's amazingly easy and gives the perfect results for my bags and accessories. It looks like it was done by a professional photographer.",
    author: "Mary J.",
  }
];

const ReviewCard = ({ title, content, author }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto md:mx-0 transition ease-in-out duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-1
 cursor-pointer">
    <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-700 mt-2">{content}</p>
    <p className="mt-4 font-semibold text-gray-800">{author}</p>
  </div>
);

const ReviewSection = () => (
  <section className="py-16 bg-gray-50">
    <h2 className="text-center text-2xl font-bold mb-10">Pixelcut is loved by over 2 million people</h2>
    <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  </section>
);

export default ReviewSection;
