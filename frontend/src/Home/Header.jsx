import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";
import ViewHeadlineSharpIcon from "@mui/icons-material/ViewHeadlineSharp";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

import { setDoc, doc, getDoc } from "firebase/firestore";

import { ClickAwayListener } from "@mui/material";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";

export function Header({ user, setUser ,mystate  }) {
  
  // useEffect(()=>{
  //   console.log("My State at Each time",mystate);
  // },[])


  const [message, setMessage] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    setMenuOpen(false);
    try {
      await signOut(auth);

      setUser(null); // Clear user state
      navigate("/");
      toast.success("Logout Successfully", { containerId: "top-container" });

      // setMenuOpen(false);
    } catch (error) {
      toast.error("Logout Error", { containerId: "top-container" });

      console.error("Error during sign out", error);
    }
  };

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [ispensignup, setIsOpenSignUp] = useState(false);


 
   

  const [isopenlogin, setIsOpenLogin] = useState(false);

 

 




  const closePopup = () => {
    setIsOpenLogin(false);
    setIsOpenSignUp(false);
    setIsOpen(false);
   
  };

  useEffect(() => {
    if (user) {
      setIsOpenSignUp(false);
      setIsOpenLogin(false);
    }
  }, [user]);

  const handlesignup = () => {
    setIsOpenSignUp(true);
    setIsOpenLogin(false);

    setMenuOpen(false);

    setEmail("");
    setPassoword("");
    setName("");
  };

  const handlesignin = () => {
    setIsOpenLogin(true);
    setIsOpenSignUp(false);
    setMenuOpen(false);

    setEmail("");
    setPassoword("");
    setName("");
  };

  const [email, setEmail] = useState("");

  const [password, setPassoword] = useState("");

  const [name, setName] = useState("");



  const Login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Fetch the user's profile from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log(userData);
        const usernames = userData.name;
        localStorage.setItem("userName", usernames);
      } else {
        console.log("No user profile found!");
      }

      // setMessage('Login Successful');
      closePopup();
      toast.success("Login Successfully", { containerId: "top-container" });
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        // setMessage('Incorrect Email or Password');
        toast.error("Login Fail", { containerId: "top-container" });
      } else {
        // setMessage('Account does not Exist');
        toast.error("Account Does Not Exist", { containerId: "top-container" });
      }
    }
  };

  useEffect(() => {
    setMessage("");
  }, [email, password, name]);

  useEffect(() => {
    console.log("email", email);
    console.log("Name", name);
    console.log("password", password);
  });

  const Signup = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !password) {
      // setMessage('All fields are required');
      toast.error("Name, email, and password are required", {
        containerId: "top-container",
      });
      return;
    }

    if (password.length < 6) {
      // setMessage('Password must be at least 6 characters');
      toast.error("Password must be at least 6 characters", {
        containerId: "top-container",
      });
      return;
    }

    // Check if the email format is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      // setMessage('Please enter a valid email address');
      toast.error("Please enter a valid email address", {
        containerId: "top-container",
      });
      return;
    }

    const userData = {
      email,
      password,
      name,
    };

    try {
      // Create user with email and password
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), userData);
      console.log("User created successfully");

      // Show success message
      // setMessage('Account created successfully');
      closePopup();
      toast.success("Account created successfully", {
        containerId: "top-container",
      });

      // Close popup and navigate after 2 seconds
    } catch (error) {
      const errorCode = error.code;
      console.log("Error I get", errorCode);

      // Handle specific error codes
      if (errorCode === "auth/email-already-in-use") {
        // setMessage('Email address already in use');
        toast.error("Email address already in use", {
          containerId: "top-container",
        });
      } else if (errorCode === "auth/weak-password") {
        // setMessage('Password must be at least 6 characters');
        toast.error("Password must be at least 6 characters", {
          containerId: "top-container",
        });
      } else if (errorCode === "auth/invalid-email") {
        // setMessage('Please enter a valid email address');

        toast.error("Please enter a valid email address", {
          containerId: "top-container",
        });
      } else {
        // setMessage('Something went wrong, please try again');
        toast.error("Something went wrong, please try again", {
          containerId: "top-container",
        });
      }
    }
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    try {
      localStorage.removeItem("userName");
      const googlelogin = await signInWithPopup(auth, googleProvider);

      const user = googlelogin.user;
      const { displayName, email, uid } = user;
      console.log("Goolge Login SuccessFully", user);

      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      closePopup();

      if (!userDoc.exists()) {
        // If user does not exist, save their details to Firestore
        await setDoc(userDocRef, {
          name: displayName,
          email: email,
        });
      }

      navigate("/");
      toast.success("Login Successfully!", {
        containerId: "top-container",
      });

      // console.log("User login with google  and Name is",getlogin.displayName);
    } catch (error) {
      toast.error("Login Fail Signup Account", {
        containerId: "top-container",
      });
      console.log(error.message);
    }
  };

  // const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleToggleMenu = () => {
    setBlogDropdownOpen(false);
    setApiDropdownOpen(false); // Close other dropdowns
    setToolsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMenuOpen((prev) => !prev);
  };

  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [apiDropdownOpen, setApiDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropdownOpen] = useState(false);

  const handleDropdownToggle = (item) => {
    if (item === "Blog") {
      setBlogDropdownOpen(!blogDropdownOpen);
      setApiDropdownOpen(false); // Close other dropdowns
      setToolsDropdownOpen(false);
      setAboutDropdownOpen(false);
    } else if (item === "API") {
      setApiDropdownOpen(!apiDropdownOpen);
      setBlogDropdownOpen(false);
      setToolsDropdownOpen(false);
      setAboutDropdownOpen(false);
    } else if (item === "Home") {
      setToolsDropdownOpen(!toolsDropdownOpen);
      setBlogDropdownOpen(false);
      setApiDropdownOpen(false);
      setAboutDropdownOpen(false);
      setMenuOpen(false);
      navigate("/");
    } else if (item === "About") {
      setAboutDropdownOpen(!aboutDropDownOpen);
      setToolsDropdownOpen(false);
      setBlogDropdownOpen(false);
      setApiDropdownOpen(false);
    }
  };

 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    console.log("Click on toogleDwop", isOpen);
    e.stopPropagation();
    setIsOpen(!isOpen);
  };



  const handleprivacy = () => {
    navigate("/privacy_policy");
    setIsOpen(false);
  };

  const handlehome = () => {
    navigate("/");
    setIsOpen(false);
  };

  const getDisplayName = (currentUser) => {
    console.log("Detail of user in getdisplay", currentUser);
    const inputusername = localStorage.getItem("userName");

    if (inputusername) {
      // const capitalname =
      return inputusername.toUpperCase();
    }

    if (currentUser.displayName) {
      return currentUser.displayName; // Use displayName if available
    }
    if (currentUser.email) {
      return currentUser.email.split("@")[0]; // Fallback to email username
    }
    return "Guest";
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-20 py-2 md:py-6 px-2 md:px-8">
      <div className="flex items-center justify-between">
        <Link to="/">
          {" "}
          <h1 className="text-2xl font-semibold text-gray-800">Remove Bgg</h1>
        </Link>

       
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold items-center">
          <Link to="/" className="relative group">
            <span className="hover:text-blue-600 transition-colors duration-300">
              Home
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/api_buy" className="relative group">
            <span className="hover:text-blue-600 transition-colors duration-300">
              Buy Api
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/api" className="relative group">
            <span className="hover:text-blue-600 transition-colors duration-300">
              Implement API
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/blog" className="relative group">
            <span className="hover:text-blue-600 transition-colors duration-300">
              Blog
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/privacy_policy" className="relative group">
            <span className="hover:text-blue-600 transition-colors duration-300">
              About
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center ">
          {/* Mobile Menu toggle Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className="p-2  text-gray-600 hover:text-gray-900  "
            >
              {menuOpen ? (
                <CloseIcon style={{ width: "40px", height: "40px" }} />
              ) : (
                <ViewHeadlineSharpIcon
                  style={{ width: "40px", height: "40px" }}
                />
              )}{" "}
              {/* Shows "X" when menu is open, "☰" when closed */}
            </button>
          </div>
          {/* Desktop Buttons */}

          {!user ? (
            <div className="flex gap-2">
              <button
                onClick={handlesignin}
                className="hidden md:block text-gray-800 font-medium"
              >
                Log in
              </button>
              <button
                onClick={handlesignup}
                className="hidden md:block bg-black text-white px-4 py-2 rounded-lg"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div>
              <div className="hidden md:block lg:block xlg:block">
                {/* User Avatar */}

                <div
                  className="w-auto h-12 px-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md"
                  onClick={toggleDropdown}
                >
                  <span className="text-white flex items-center font-bold text-lg uppercase">
                    Account{" "}
                    {isOpen === true ? (
                      <GoTriangleRight
                        style={{ width: "25px", height: "25px" }}
                      />
                    ) : (
                      <GoTriangleDown
                        style={{ width: "25px", height: "25px" }}
                      />
                    )}
                  </span>
                </div>

                {/* ClickAwayListener to close the dropdown when clicked outside */}
                <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                  <div>
                    {/* Dropdown */}
                    {isOpen && (
                      <div className="absolute right-0 mt-6 w-60 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 animate-fadeIn">
                        {/* User Info */}
                        <div className="p-4 flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
                            <span className="text-gray-700 font-bold text-3xl">
                              {getDisplayName(user)[0]}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {getDisplayName(user)}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {user?.email?.length > 15
                                ? `${user.email.slice(0, 15)}...`
                                : user?.email}
                            </p>
                          </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Action Buttons */}
                        <div className="p-4">
                          <button
                            onClick={handlehome}
                            className="w-full py-3 px-5 mb-4 text-center text-blue-700 border border-blue-700 rounded-lg bg-transparent hover:bg-blue-700 hover:text-white transition-all duration-200 font-medium"
                          >
                            Home
                          </button>

                          <button
                            onClick={handleprivacy}
                            className="w-full py-3 px-5 mb-4 text-center text-green-700 border border-green-700 rounded-lg bg-transparent hover:bg-green-700 hover:text-white transition-all duration-200 font-medium"
                          >
                            Privacy
                          </button>

                          <button
                            onClick={handleLogout}
                            className="w-full py-2 transition-transform hover:scale-105 px-4 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-md"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </ClickAwayListener>
              </div>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div>
          <div className="fixed top-[65px] right-0 w-full h-auto bg-white shadow-lg z-10 p-4 flex flex-col">
            <ul className="space-y-4 ml-3 mt-4">
              {["Home", "API", "Blog", "About"].map((item) => (
                <li
                  key={item}
                  className="text-gray-800 font-semibold hover:text-blue-600"
                >
                  <button
                    onClick={() => handleDropdownToggle(item)}
                    className="flex items-center justify-between w-full"
                  >
                    {item}
                    {/* <FontAwesomeIcon icon={dropdownOpen === item ? faChevronDown : faChevronRight} />   */}
                  </button>

                  {/* Mobile Dropdown Items */}
                  {item === "Blog" && blogDropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                      <Link to="/blog" onClick={handleToggleMenu}>
                        Latest Blog
                      </Link>
                    </ul>
                  )}

                  {item === "API" && apiDropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                      <Link to="/api_buy" onClick={handleToggleMenu}>
                        {" "}
                        <li>Buy API</li>{" "}
                      </Link>
                      <Link to="/api" onClick={handleToggleMenu}>
                        <li>Implmentt api</li>
                      </Link>
                    </ul>
                  )}

                  {item === "Home" && toolsDropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2 text-gray-600"></ul>
                  )}

                  {item === "About" && aboutDropDownOpen && (
                    <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                      <Link to="/termcondition" onClick={handleToggleMenu}>
                        {" "}
                        <li>Term and Service</li>
                      </Link>
                      <Link to="/privacy_policy" onClick={handleToggleMenu}>
                        <li>Privacy Policy</li>
                      </Link>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {!user ? (
              <div className="mt-8 flex flex-col items-center space-y-4">
                <button
                  onClick={handlesignin}
                  className="text-gray-800 border rounded-md py-2 w-full font-medium"
                >
                  Log in
                </button>
                <button
                  onClick={handlesignup}
                  className="bg-black text-white w-full px-6 py-2 rounded-lg"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center space-y-4">
                <button className="text-gray-800 border rounded-md py-2 w-full font-medium">
                  {getDisplayName(user)
                    ? getDisplayName(user)
                    : user?.email?.length > 15
                    ? `${user.email.slice(0, 15)}...`
                    : user?.email}
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white w-full px-6 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div>
        {isopenlogin  && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Sign In
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassoword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  onClick={Login}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </form>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={googleLogin}
                  className="w-full flex items-center justify-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <FcGoogle className="w-5 h-5 mr-2" />
                  Sign In with Google
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Don't have an account?{" "}
                <button
                  onClick={handlesignup}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        )}
      </div>

      <div>
        {ispensignup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 px-4">
            {/* Popup content */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Sign Up
              </h2>
              <form className="space-y-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassoword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Create a password"
                  />
                </div>

                {message && (
                  <div className="w-full z-10 fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-md shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all duration-300 ease-in-out">
                    <p className="text-lg font-semibold">{message}</p>
                  </div>
                )}

                <button
                  onClick={Signup}
                  className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Already have an account?{" "}
                <button
                  onClick={handlesignin}
                  className="text-blue-600 hover:underline"
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        )}
      </div>

      <ToastContainer
        enableMultiContainer
        containerId="top-container"
        position="top-center" // Matches the toast position
        autoClose={2000} // Automatically closes after 3 seconds
        hideProgressBar={false} // Shows the progress bar
        closeOnClick={true} // Allows closing by clicking on the notification
        pauseOnHover={true} // Pauses the auto-close timer on hover
        draggable={true} // Enables dragging of the notification
        theme="light" // Matches the light theme
      />
    </header>
  );
}

export default Header;
