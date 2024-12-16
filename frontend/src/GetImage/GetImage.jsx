
import React, { useState, useEffect } from "react";
import { getDatabase ,ref,set } from "firebase/database";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useGenerateImageContext } from "../Contextapi/Contextapi";
import { FaDownload } from "react-icons/fa";
import TestImg from "./../Image/testingnew.jpg";
import sp from "./../Image/spinner1.gif";

import { CommentSection } from "./CommentSection";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from 'axios'


import { useNavigate } from "react-router-dom";
import { LiveComments } from "./LiveComments";

export function GetImage({user}) {


   console.log("This is user detail in GetImage page",user,"type of user is ",typeof user);

  const { generateimage,values} = useGenerateImageContext();


  const navigate = useNavigate();


  // useEffect(() => {
  //   // Clean up the state when leaving the GetImage page
  //   return () => {
  //     setApiCalled(false);
  //     setIsLoading(false);
  //     setValues(0);
      
  //     // This will reset the generateimage state to null when leaving the page
  //     //setGenerateImage(null);  // Or you can call resetState if you want to reset other states too
  //   };
  // }, [setValues]); // This effect runs when the component unmounts

 
 




  useEffect(()=>{
    console.log("Image data get backend",generateimage);
    console.log("value now ",values);
  },[generateimage,values])


  console.log("Image name i get from Image", sp);

 

  console.log("Generat Image get in getimage page", generateimage);
 

  const [isModalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    const imageURL = generateimage; 
    if (!imageURL) {
      console.error("No image URL provided.");
      toast.error("Please Select Image",{containerId : 'second'})
      return;
    }

  
    // Create a temporary link element for downloading
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = `generated-image.${format}`; // Set the desired file name
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Trigger the download
    document.body.removeChild(link); //
  };





  


  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

 




  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 1));
  };

  const [name, setName] = useState(''); // Default unit
  const [width, setWidth] = useState(""); // Width input
  const [height, setHeight] = useState(""); // Height input
  const [format,setformat] = useState("png");


  


  const [rating,setRating] = useState('');

  const [feedback,setFeedBack] = useState(null);

  // const handleUnitChange = (e) => {
  //   setUnit(e.target.value); // Update the unit dynamically
  // };

  const handleWidthChange = (e) => {
    const value = e.target.value;

    if (value >= 0 || value === "") {
      // Allow only non-negative values or empty input
      setWidth(value.replace(/^0+(?!$)/, "")); // Remove leading zeros
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;

    if (value >= 0 || value === "") {
      // Allow only non-negative values or empty input
      setHeight(value.replace(/^0+(?!$)/, "")); // Remove leading zeros
    }
  };




  const handleFeedBack = async (e)=>{
       e.preventDefault();


      console.log("user getting data",user);


       if(user){
        console.log("My Rating is ",rating);
      
          console.log("user data",user);
         
        const inputusername = localStorage.getItem("userName"); 
        
        console.log("Input user Name",inputusername);



         const userData = {
          email: user.email,    // The user's email
          uid: user.uid,        // The user's unique ID
          name: inputusername || user.displayName || "Guest", // Display name (if set, otherwise a fallback)
          rating : rating,
          feedback : feedback
       };
     



        try{

        console.log("Come here handlesubmit");
        console.log("Selected detail",userData);

          const db = getDatabase();
          const getref = ref(db, `user/${userData.email.replace('.', '_')}`);




           await set(getref,userData)


          console.log("Successfully")
          toast.success('Submit Feed Successfully',{containerId:"second"})
           
        }
        catch(err){
           console.log("This Feed Back Not Submitted");
           toast.error("FeedBack Not Submitted",{containerId : 'second'})

        }








      
        setRating('');
       setFeedBack('')
       }
       else{
           toast.error('Please First Login',{ containerId : "top-container"});
       }


       
  
       

    




  }




  const handleDownloadByCategory = async (generateimage,format, width, height,name) => {
 
      console.log("Generate Image",generateimage)

     const response = await fetch(generateimage);
    const blob = await response.blob();

  
    const file = new File([blob], "generated-image.jpg", { type: blob.type });

    
    
 

    const formData = new FormData();
formData.append("output_image", file);  
formData.append("width", width);
formData.append("height", height);
formData.append("format", format);






 

   // console.log("formdata",formData);
   try{
   const response = await axios.post('http://localhost:5000/upload/image', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
          }, 
          responseType: 'arraybuffer',
       });

    

       const arrayBuffer = response.data;
       const blobData = new Blob([arrayBuffer], { type: `image/${format}` }); // Adjust MIME type as needed


     
        
       // Create a downloadable link
       const url = window.URL.createObjectURL(blobData);
       const link = document.createElement("a");
       link.href = url;
       link.download = `${name}.${format}`; 
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);

     
       window.URL.revokeObjectURL(url);
    
    } catch (error) {
        console.error("Error:", error);
    }
};







  useEffect(()=>{
    console.log("MY current rating is",rating);

  },[rating])




  const [isTouching, setIsTouching] = useState(false); // To track if pinch is active

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) { // Detect pinch start
        setIsTouching(true);
      }
    };

    const handleTouchMove = (e) => {
      if (isTouching && e.touches.length === 2) {
        const distance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        setScale(prevScale => prevScale + (distance - 200) / 1000); // Adjust the scale based on touch distance
      }
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    // Add event listeners for touch events
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTouching]);




  return (
    <div className="min-h-screen bg-gray-50 mt-20   ">
      {/* Top Bar */}
      <div className="flex w-full justify-between items-center px-4 py-4 bg-white shadow-md flex-wrap ">
        <div className="flex items-center space-x-4 mb-2 md:mb-0 md:mt-5  ">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Background Remover
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Download
          </button>
        </div>
      </div>

    





<div className="lg:flex md:flex p-8">
 
<div className="flex flex-col justify-between items-center w-full lg:w-3/5 md:w-1/2 px-6 py-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Your Beautiful Image</h1>
      <p className="text-gray-600 text-lg mb-6">
        Here’s a preview of the image you generated. Hover to zoom!
      </p>

      <div className="relative  w-full">
        <div className={`${values!==2 ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' : 'bg-white'}  shadow-xlsm  sm:h-96  md:h-[500px] lg:h-[500px]  h-500  rounded-lg overflow-hidden flex items-center justify-center border-4 border-blue-300`}>
          {values === 2 ? (
            <div className="w-auto  flex items-center p-4 justify-center">
              <img
                src={generateimage}
                alt="Generated Preview"
                className="object-contain w-auto lg:h-[550px] transition-transform duration-300 hover:scale-110"
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s",
                }}
              />
            </div>
          ) : values === 1 ? (
           

            <div className="p-28">

                <div className="w-auto   flex items-center  justify-center">
                  
               <div className="object-contain bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  spinner border-4 border-gray-200 border-t-red-500 rounded-full w-12 h-12 animate-spin"></div>

              </div>
          </div>
          ) : values === 0 ? (
            <div className="flex flex-col p-8 justify-center  text-lg text-white">
              <p>No image to display yet.</p>
              <p>Generate or upload one to see the magic!</p>
            </div>
          ) : null}
        </div>

        {/* Section of Zoom */}
        <div className="absolute sm:bottom-[-40px] mt-3 mb-3 left-[100px] md:left-[150px] lg:left-[400px] lg:bottom-[-70px] flex gap-6">
          <button
            onClick={handleZoomIn}
            className="w-6 h-6 sm:w-10 sm:h-10 left-4 flex items-center justify-center bg-blue-500 text-white text-xl rounded-full hover:bg-blue-600 shadow-md"
            aria-label="Zoom In"
          >
            <AiOutlinePlus />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-500 text-white text-xl rounded-full hover:bg-gray-600 shadow-md"
            aria-label="Zoom Out"
          >
            <AiOutlineMinus />
          </button>
        </div>
        {/* End of Zoom Section */}
      </div>
    </div>
  




  <div className="flex flex-col justify-between items-center bg-white shadow-lg rounded-tl-3xl md:rounded-none w-full  lg:w-2/5 md:w-1/2 pt-8 pr-8 pl-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Customize & Download
    </h2>
    <div className="w-full   border-b-2 border-gray-200 mb-6">

     

<div className="mb-6 w-full">
  <div className="bg-white shadow-lg rounded-lg p-4 w-full">
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Image Resolution</h2>
    <div className="flex w-full flex-col gap-4 md:flex-row">
      
      {/* Width Section */}
      <div className="flex flex-col w-full md:w-1/3">
        <label
          htmlFor="width"
          className="text-gray-600 text-sm font-medium mb-2"
        >
          Width
        </label>
        <div className="flex items-center border rounded-md px-3 py-2">
          <input
            id="width"
            type="number"
            value={width}
            onChange={handleWidthChange}
            placeholder={`Not set px`}
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
          <span className="text-gray-500 pl-2">px</span>
        </div>
      </div>

      {/* Height Section */}
      <div className="flex flex-col w-full md:w-1/3">
        <label
          htmlFor="height"
          className="text-gray-600 text-sm font-medium mb-2"
        >
          Height
        </label>
        <div className="flex items-center border rounded-md px-3 py-2">
          <input
            id="height"
            type="number"
            value={height}
            onChange={handleHeightChange}
            placeholder={`Not set px`}
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
          <span className="text-gray-500 pl-2">px</span>
        </div>
      </div>

      {/* Name Section */}
      <div className="flex flex-col w-full md:w-1/3">
        <label
          htmlFor="name"
          className="text-gray-600 text-sm font-medium mb-2"
        >
          Name
        </label>
        <input
          id="name"

          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text"
          className="border rounded-md px-3 py-2 outline-none text-gray-700 bg-white"
          placeholder="Image name.."
        />
      </div>
      
    </div>
  </div>
</div>






     
      <div className="mb-6 w-full">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Select Format
        </label>
        <select
          className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          onChange={(e) => setformat(e.target.value)}
        >
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="webp">WEBP</option>
          <option value="jpeg">JPEG</option>
        </select>
      </div>

      <div className="mb-4 w-full">
        <button
          className={`w-full bg-blue-500 text-white rounded-lg py-3 shadow-lg transition ${
            !generateimage
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
          onClick={() =>handleDownloadByCategory(generateimage,format,width,height,name)}
        >
          <FaDownload className="inline-block mr-2" />
          Download Image
        </button>
      </div>

    
      <div className="w-full bg-gray-50 p-4 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Rate This Result
        </h3>

        <div className="flex items-center space-x-2 mb-4">
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </div>

        <textarea
          onChange={(e) => setFeedBack(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          rows="3"
          placeholder="Tell us what you think..."
          value={feedback}
        ></textarea>

        <button
          onClick={handleFeedBack}
          className="mt-4 w-full bg-blue-600 text-white rounded-lg py-2 shadow-lg hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </div>

      <div className="block md:hidden lg:hidden mt-6 text-center text-sm text-gray-500">
        Made with ❤️ by your amazing app
      </div>
    </div>
  </div>
</div>


      


      {/* Modal for Pro Plan */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full transform transition-all duration-500 scale-95 hover:scale-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Special Offer - Limited Time Offer
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        New User Has Just Signed Up and Get Unlimited Tokens
      </p>

      {/* Buy Button */}
      <button
        onClick={()=>navigate('/api_buy')}
        className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full mb-4"
      >
        BUY
      </button>

      {/* Close Button */}
      <button
        onClick={toggleModal}
        className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
      >
        Close
      </button>
    </div>
  </div>
)}


      <div>
      
      </div>

      <ToastContainer
  enableMultiContainer
  containerId="top-container"
  position="top-center" 
  autoClose={2000}     
  hideProgressBar={false} 
  closeOnClick={true}   
  pauseOnHover={true}  
  draggable={true}      
  theme="light"         
/>

 

<ToastContainer
  enableMultiContainer
  containerId='second'
  position="top-center"
  autoClose={2000}      
  hideProgressBar={false} 
  closeOnClick={true}  
  pauseOnHover={true}   
  draggable={true}      
  theme="light"         
/>


     <CommentSection user={user}/>
     <LiveComments user={user}/>


    </div>
  );
}
