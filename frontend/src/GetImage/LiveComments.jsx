



import React, { useState ,useEffect} from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


import {ref,set,get, onValue, off } from 'firebase/database';
import {database} from './../firebase/firebase.config'


import Stack from '@mui/material/Stack';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {Link} from 'react-router-dom'

export function LiveComments({user}) {

  



  const [comments,setComments] = useState([]);
  
  // useEffect(()=>{

  //   const handleLiveComment = async ()=>{
  //     console.log("Live comment click");
           
  //        try{
             
  //            const dataref = ref(database,'reviews');
  
  //            const snapshot = await get(dataref);
  
  
  //            if (snapshot.exists()) {
  //             const rawData = snapshot.val();
        
  //             // Transform raw data into the desired format
  //             const transformedComments = Object.entries(rawData).map(([emailKey, review]) => ({
  //               name: review.acutalname || review.name || "Anonymous",
  //               comment: review.feedback || "No comment provided",
  //               date: review.date || "Unknown date",
  //             }));
        
  //             console.log(transformedComments);
  //             setComments(transformedComments);
  //           } else {
  //             console.log("No reviews found in Firebase");
  //             setComments([]); // Clear comments if no data
  //           }
  
  
  
       
  //        }
  //        catch(err){
  //           console.log("Data is not get from fireabse review system",err);
  //        }
  
  //   }
  //   handleLiveComment();

  // },[]);


 
 
    
   
  //  console.log("user in Live Comment Page section",JSON.stringify(user));
    
     
  useEffect(() => {
    // Fetch comments when the page is loaded
    const handleLiveComment = async () => {
      console.log("Live comment fetch triggered");
  
      try {
        const dataref = ref(database, 'reviews');  // Firebase path for reviews
  
        const snapshot = await get(dataref);  // Fetch data
  
        if (snapshot.exists()) {
          const rawData = snapshot.val();
  
          // Transform data into the desired format
          const transformedComments = Object.entries(rawData).map(([emailKey, review]) => ({
            name: review.acutalname || review.name || "Anonymous",
            comment: review.feedback || "No comment provided",
            date: review.date || "Unknown date",
            rating : review.rating || "5"
          }));
  
          console.log(transformedComments);
          setComments(transformedComments);  // Update state with transformed comments
        } else {
          console.log("No reviews found in Firebase");
          setComments([]);  // Set empty array if no data exists
        }
      } catch (err) {
        console.log("Error fetching data from Firebase", err);
      }
    };
  
    // Trigger the comment fetch
    handleLiveComment();
  
    // Optionally, set up real-time listener using onValue if you want live updates
    const dataRef = ref(database, 'reviews');
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();
    
        const transformedComments = Object.entries(rawData).map(([emailKey, review]) => ({
          name: review.acutalname || review.name || "Anonymous",
          comment: review.feedback || "No comment provided",
          date: review.date || "Unknown date",
          rating: review.rating || "5",
          timestamp: review.timestamp || 0 // Include timestamp for sorting
        }));
    
        // Sort comments by timestamp in descending order (latest first)
        const sortedComments = transformedComments.sort((a, b) => b.timestamp - a.timestamp);
        
        setComments(sortedComments);  // Update the comments state in real-time
      } else {
        setComments([]);  // Clear comments if no data exists
      }
    });
  
    // Cleanup listener on component unmount (important to prevent memory leaks)
    return () => {
      off(dataRef);  // Remove the listener when the component is unmounted
    };
  
  }, []);  // Empty dependency array ensures it runs only once on mount
  


   
   

    const [name, setName] = useState('');
    const [newemail, setEmail] = useState('');
    const [feedback, setFeedBack] = useState('');
    const [rating, setRating] = useState('');


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      console.log(name);
      console.log(newemail);
      console.log(feedback);
      console.log(rating);
      console.log(user);
  
      if (!name || !newemail || !feedback) {
        toast.error("Please Enter All Fields", { containerId: 'submit_form' });
        console.log("Please Enter all the Fields of the Form");
        return;
      }
  
      if (!rating) {
        toast.error("Give Rating in Star", { containerId: 'submit_form' });
        return;
      }
  
      try {
        const inputusername = localStorage.getItem("userName");
  
       


        const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
  
        const userData = {
          email: user.email,
          uid: user.uid,
          name: inputusername || user.displayName || "Guest",
          feedback: feedback,
          newemail: newemail,
          acutalname: name,
          rating: parseInt(rating),
          date: formattedDate,
          timestamp: currentDate.getTime(), // Add timestamp for sorting
        };
  
        const getreffordatabase = ref(database, `reviews/${user.email.replace('.', '_')}`);
  
        await set(getreffordatabase, userData);
  
        toast.success("Thank You For Submitting Feedback", { containerId: "submit_form" });
  
        console.log("Review Successfully Submitted");
  
        // Reset form fields
        setName('');
        setEmail('');
        setFeedBack('');
        setRating('');
      } catch (err) {
        toast.error("Error in Submitting Review", { containerId: "submit_form" });
        console.log("Error in Review System", err);
      }
    };
  


  // const [currentPage, setCurrentPage] = useState(1);
  // const commentsPerPage = 3;

  // const totalPages = Math.ceil(comments.length / commentsPerPage);

  // const paginatedComments = comments.slice(
  //   (currentPage - 1) * commentsPerPage,
  //   currentPage * commentsPerPage
  // );





  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;



  // Paginate the comments
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const paginatedComments = comments.slice(
    (currentPage - 1) * commentsPerPage,
    currentPage * commentsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get the first character of the name
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };


  // Function to handle pagination
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className="flex flex-col items-center bg-white p-12 shadow-lg rounded-lg  mx-auto">
      {/* Ratings Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Ratings & Reviews</h2>
        <div className="text-4xl font-semibold mb-2">3.8</div>
        <div className="text-yellow-400 flex justify-center mb-4">
          {/* Star ratings */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  i < 4 ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.954a1 1 0 00.95.691h4.153a1 1 0 01.616 1.787l-3.36 2.44a1 1 0 00-.363 1.118l1.287 3.954a1 1 0 01-1.538 1.118L10 13.49l-3.84 2.788a1 1 0 01-1.538-1.118l1.287-3.954a1 1 0 00-.363-1.118l-3.36-2.44A1 1 0 014.6 7.572h4.153a1 1 0 00.95-.691L9.049 2.927z" />
              </svg>
            ))}
        </div>
        <p className="text-sm text-gray-600">339 ratings</p>
      </div>

      {/* Distribution */}
      <div className="w-full mt-6 space-y-3">
        {[
          { stars: 5, percent: 42 },
          { stars: 4, percent: 25 },
          { stars: 3, percent: 15 },
          { stars: 2, percent: 6 },
          { stars: 1, percent: 13 },
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-sm font-medium w-6">{item.stars}</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full mx-3 relative">
              <div
                style={{ width: `${item.percent}%` }}
                className="absolute h-2 bg-yellow-400 rounded-full"
              ></div>
            </div>
            <span className="text-sm font-medium">{item.percent}%</span>
          </div>
        ))}
      </div>

      {/* Review Section */}
      <div className="mt-8 w-full text-center">
        <h3 className="text-lg font-semibold mb-3">Review this product</h3>
        <p className="text-gray-600 text-sm mb-4">
          Help others make an informed decision!
        </p>
        <div className="flex justify-center gap-2 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-yellow-400 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.691h4.153a1 1 0 01.616 1.787l-3.36 2.44a1 1 0 00-.363 1.118l1.287 3.954a1 1 0 01-1.538 1.118L12 13.49l-3.84 2.788a1 1 0 01-1.538-1.118l1.287-3.954a1 1 0 00-.363-1.118L4.486 9.359A1 1 0 015.102 7.572h4.153a1 1 0 00.95-.691l1.286-3.954z"
                />
              </svg>
            ))}
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Write a review
        </button>
        
           
           
             <div>
                 <div class="min-h-screen bg-blue-300 flex items-center justify-center p-6 rounded-lg mt-5">
                
  <div class="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8 relative   hover:scale-105 transition duration-500 ease-in-out cursor-pointer" >
    <div class="absolute -top-12 -right-12 h-24 w-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-2xl transform hover:scale-110 transition duration-500"></div>
   
    <div class="mb-8 text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
        Write a Review
      </h2>
      <p class="text-gray-600 mt-2">
        Your feedback helps us improve! Share your experience.
      </p>
    </div>

   
    <form class="space-y-6">
    
      <div class="flex flex-col sm:flex-row sm:gap-4">
        <div class="flex-1">
          <label for="name" class="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            value={name}
            type="text"
            placeholder="Your name"
            onChange={(e)=>setName(e.target.value)}
            class="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>
        
        <div class="flex-1 mt-4 sm:mt-0">
          <label for="email" class="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            value={newemail}
            type="email"
            placeholder="Your email"
            onChange={(e)=>setEmail(e.target.value)}
            class="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>
      </div>

    
      <div>
        <label class="block text-gray-700 font-medium mb-1">
          Rating
        </label>
        <div class="flex space-x-4">
        <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{
          "& .MuiRating-icon": {
            fontSize: "2rem", 
          },
        }}
      />
    </Box>

        </div>
      </div>

   
      <div>
        <label for="review" class="block text-gray-700 font-medium mb-1">
          Your Review
        </label>
        <textarea
          value={feedback}
          rows="4"
          placeholder="Share your experience..."
          onChange={(e)=>setFeedBack(e.target.value)}
          class="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        ></textarea>
      </div>

     
      <div class="text-center">
        <button
        
          onClick={handleSubmit}
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
        >
          Submit Review
        </button>
      </div>
    </form>
  </div>
</div>

             </div>
           
           



        
  



      </div>

      {/* Comments Section */}
      <div className="mt-12 w-full">
        <h3 className="text-xl font-bold mb-4">Comments</h3>




 {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
  <div className="md:col-span-2 space-y-6">
    {paginatedComments.map((comment, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      >
       
        <div className="flex items-center space-x-4">
          <img
            src={comment.image || "https://via.placeholder.com/100"} 
            alt={`${comment.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{comment.name}</h4>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>
        </div>

      
        <p className="text-gray-700 mt-4">{comment.comment}</p>

        
        <div className="mt-4 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                i < comment.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-gray-500 ml-2">({comment.rating}/5)</span>
        </div>
      </div>
    ))}
  </div>

 
  <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
   
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">Why Choose Our AI?</h3>
      <ul className="space-y-2 text-gray-700">
        <li>✨ High-precision background removal</li>
        <li>⚡ Fast processing within seconds</li>
        <li>📂 Supports multiple formats</li>
        <li>🖼️ Free previews before saving</li>
      </ul>
    </div>

   
    <div className="mt-6 text-center">
      <h4 className="text-lg font-medium text-gray-800 mb-2">Try Our Tool Now</h4>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Upload Your Image
      </button>
    </div>

    
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">What Users Are Saying</h4>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-gray-700 italic">
          "This tool saved me hours of work! It's fast and accurate."
        </p>
        <div className="flex items-center mt-2">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <span className="text-sm text-gray-600 ml-2">- Jane Doe</span>
        </div>
      </div>
    </div>
  </div>
</div>  */}




    

   



        {/* Pagination */}
        {/* <div className="flex justify-center mt-6 gap-2">
          {Array(totalPages)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
        </div> */}


      

  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section: Comments */}
      <div className="md:col-span-2 space-y-6">
        {paginatedComments.map((comment, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* User Info Section */}
            <div className="flex items-center space-x-4">
              {comment.image ? (
                <img
                  src={comment.image}
                  alt={`${comment.name}'s avatar`}
                  className="w-16 h-16 rounded-full object-cover border border-gray-200"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center bg-gray-300 text-black text-lg font-bold rounded-full">
                  {getInitial(comment.name)}
                </div>
              )}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
            </div>

           
        

        

 
              
             
<Stack spacing={1} className="mt-2">
    
      <Rating name="half-rating-read" className="mt-1" defaultValue={comment.rating} precision={1} readOnly />
    </Stack>

    <p className="text-gray-700 mt-1 text-bold font-medium">{comment.comment}</p>




          </div>
        ))}
      </div>

      {/* Right Section: Features and Call-to-Action */}
      <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
        {/* Feature Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Why Choose Our AI?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✨ High-precision background removal</li>
            <li>⚡ Fast processing within seconds</li>
            <li>📂 Supports multiple formats</li>
            <li>🖼️ Free previews before saving</li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-6 text-center">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Try Our Tool Now</h4>
          <Link to='/'>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Upload Your Image
          </button>
          </Link>
          
         
        
        </div>

        {/* Testimonials Section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">What Users Are Saying</h4>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-700 italic">
              "This tool saved me hours of work! It's fast and accurate."
            </p>
            <div className="flex items-center mt-2">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <span className="text-sm text-gray-600 ml-2">- Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>




<div className="flex justify-center mt-6 gap-2">
      {/* Previous Button */}
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          Prev
        </button>
      )}

      {/* Pagination Numbers */}
      {Array(totalPages)
        .fill(0)
        .map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
        >
          Next
        </button>
      )}
    </div>

      </div>

    
       
<ToastContainer
  enableMultiContainer
  containerId='submit_form'
  position="top-center" 
  autoClose={2000}     
  hideProgressBar={false} 
  closeOnClick={true}  
  pauseOnHover={true}   
  draggable={true}    
  theme="light"         
/>
    </div>
  );
};



