  import React, { createContext, useContext, useState } from 'react';

  const ImageProvider = createContext();

  export function Contextapi({ children }) {
  

      const [generateimage, setGenerateImage] = useState('');



    //   const [apiCalled, setApiCalled] = useState(false);

    // const [isLoading, setIsLoading] = useState(false);



    const [values,SetValues] = useState(0);




    // const resetState = () => {
    //   setGenerateImage('');
    //   setApiCalled(false);
    //   setIsLoading(false);
    // };
      
      

    return (
      <ImageProvider.Provider value={{ generateimage, setGenerateImage  , SetValues,values} }>
        {children}
      </ImageProvider.Provider>
    );
  }

  export const useGenerateImageContext = () => {
    const context = useContext(ImageProvider);
    if (!context) {
      throw new Error("useGenerateImageContext must be used within a Contextapi");
    }
    return context;
  };















 // Persist generateimage to localStorage whenever it changes
      // useEffect(() => {
      //   if (generateimage) {    
      //     localStorage.setItem("generatedImage", generateimage);
      //   } else {
      //     localStorage.removeItem("generatedImage");
      //   }
      // }, [generateimage]);




         // const [generateimage, setGenerateImage] = useState(
    //     () => localStorage.getItem("generatedImage") || null
    //   );