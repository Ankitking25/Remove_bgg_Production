import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Login} from './Login'
import './App.css';
import {Home} from './Home/Home.jsx'

import {GetImage} from './GetImage/GetImage.jsx'
import {Testing} from './Testing.jsx'

import { Blog }from './../src/Blog/Blog.jsx'


import {Implement_API} from './../src/Implement_API/Implement_API.jsx'

import {Termcondition} from './Services/Termcondition.jsx'


import {ScrollToTop} from './ScrollToTop.js'
import {PrivacyPolicy} from './Services/PrivacyPolicy.jsx'
import {Header} from './Home/Header.jsx'
import {Footer } from './Home/Footer.jsx'


import {useEffect,useState} from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './../src/firebase/firebase.config.jsx'
import { get } from 'firebase/database';
import { Buy_Api } from './Implement_API/Buy_Api.jsx';





function App() {

  const [user,setUser] = useState('');

  const [loading,setLoading] = useState(true);






  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user is here",user);
      if (user) {
       
        setUser(user); // Set user state if logged in
      } else {
        setUser(null); // Set user to null if logged out
      }
      setLoading(false);
    });
    

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);




  if(loading){
    return;
  }


 



  return (
       <BrowserRouter>
          <ScrollToTop />
          <Header user={user} setUser={setUser}/>
         
          <Routes>
              <Route path='/Login' element={<Login/>} />  
             <Route path='/' element={<Home user={user} />}/> 
              <Route path='/getimage' element={<GetImage   user={user} />} />
              <Route path='/test' element = {<Testing/>}/>
              <Route path = '/blog' element={<Blog/>}/>
              <Route path = '/api' element={<Implement_API/>}/> 
              <Route path = '/termcondition' element={<Termcondition/>}/> 
              <Route path = '/privacy_policy' element={<PrivacyPolicy/>}/> 
              <Route path ='/api_buy' element = {<Buy_Api/>}/>
          </Routes>
          <Footer/>
       </BrowserRouter>
  );
}

export default App;
