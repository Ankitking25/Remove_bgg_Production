import React, { useState } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import {getdatabase,ref,get} from 'firebase/database'

const commentsData = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "https://via.placeholder.com/50",
    rating: 4,
    comment: "Great service, very responsive! Will definitely use again. The service was fast and reliable. I am a very happy customer!",
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePic: "https://via.placeholder.com/50",
    rating: 5,
    comment: "Absolutely loved the product. Highly recommend to everyone! The quality exceeded my expectations, I am truly impressed.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    profilePic: "https://via.placeholder.com/50",
    rating: 3,
    comment: "Decent, but there is room for improvement. Would like to see more options. Some features are missing, but overall it was okay.",
  },
  {
    id: 4,
    name: "Michael Brown",
    profilePic: "https://via.placeholder.com/50",
    rating: 5,
    comment: "Fantastic experience! Customer support was exceptional. Everything was smooth, I will definitely come back for future purchases.",
  },
];

export function CommentSection({user}) {

 
  console.log("user in comment section ",user);

  const [readMore, setReadMore] = useState(null);
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });



 

  
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true, 
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,  
  };

  const settings = isSmallDevice ? settings2 : settings1;

  return (
           
    <div className="py-10 bg-gray-50 w-full">
      <div className="mx-auto p-8 bg-white rounded-xl  w-full">
        <h2 className="font-extrabold text-center text-3xl  text-gray-800 mb-10">Customer Feedback</h2>
        
        <Slider {...settings}>
          
           {commentsData.map((comment) => (
            <div key={comment.id} className="px-4 py-7">
              <div className="bg-blue-600 p-6  text-white rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ease-in-out">
                <div className="flex items-center space-x-4">
                  <img
                    src={comment.profilePic}
                    alt={comment.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{comment.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-xl ${index < comment.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white text-lg">
                  {readMore === comment.id
                    ? comment.comment
                    : `${comment.comment.substring(0, 100)}...`}
                </p>
                <button
                  onClick={() => setReadMore(readMore === comment.id ? null : comment.id)}
                  className="text-black mt-2 hover:underline"
                >
                  {readMore === comment.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
}
