// ImageBackgroundRemover.js
import React, { useRef, useState } from "react";
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import Img from "./../Image/cats.jpg";
import { Section } from "./Section";
import { useNavigate } from "react-router-dom";
import { TrustSection } from "./TrustSection";
import { ProductShowcase1 } from "./../Home/ProductShowcase1";
import ReviewSection from "./../Home/ReviewSection";

import FAQ from "./FAQ";
import axios from "axios";

import { useGenerateImageContext } from "../Contextapi/Contextapi";

export const Home = () => {
  const navigate = useNavigate();

  const { setGenerateImage , SetValues} =
    useGenerateImageContext();

  const inputImageRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImage = async () => {
    inputImageRef.current.click();
  };

  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];
   
    console.log("my selected image is", selectedImage);

    navigate("/getimage");
    SetValues(1);

    console.log("value set of one");


   
    
   
    if (selectedImage) {
      const formData = new FormData();
      formData.append("myimage", selectedImage);

      try {
        const response = await axios.post(
          "https://removebgbackend-qr3ed3mct-ankitking25s-projects.vercel.app/",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            responseType: "blob",
          }
        );

       

        const imageUrl = URL.createObjectURL(response.data);
        setGenerateImage(imageUrl);
       
        SetValues(2);

        console.log("value set of 2");

        console.log(imageUrl);
        console.log("response", response);
        console.log("respons.data", response.data);
      } catch (error) {
        console.log("Image is not upload from user", error);
      } finally {
         console.log("Call Admin")
      }
    }
    setImage("");
  };

  return (
    <div>
      <div className=""></div>

      <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 px-4 md:px-8">
        {/* <Header/> */}

        {/* Main Content */}
        <main className="mt-[110px] w-full flex flex-col md:flex-row items-center justify-between bg-white shadow-2xl rounded-2xl p-8 md:p-12 lg:p-16 space-y-8 md:space-y-0">
          <div className="md:text-left md:w-1/2 space-y-4">
            <img
              src={Img}
              alt="Example"
              className="mx-auto md:mx-0 rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-lg"
            />

            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
              Background Remover
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Our AI background remover instantly removes the background of your
              photos in seconds. Then you can add any new background or leave it
              transparent!
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow-lg">
            <div className="flex flex-col items-center">
              <input
                type="file"
                ref={inputImageRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <button
                onClick={handleImage}
                className="bg-blue-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Upload Image
              </button>
              {image && (
                <div className="mt-2 text-center">
                  <span className="text-lg">{image.name}</span>
                </div>
              )}
            </div>
            <p className="text-gray-500 mt-4 md:text-lg">or drop photos here</p>
          </div>
        </main>

        <section className="mt-10">
          <Section />
          <TrustSection />
          <ProductShowcase1 />
          <ReviewSection />

          <FAQ />
        </section>
      </div>

      <div>{/* <Footer /> */}</div>
    </div>
  );
};
