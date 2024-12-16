import React, { useRef, useState } from 'react';

export function Login () {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Trigger file input click on button click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    // Make a POST request to your backend with the image file
    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Upload successful:', data);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the file input
        onChange={handleFileChange} // Add onChange handler to update selected image
      />
      <button onClick={handleButtonClick}>Choose Image</button>
      
      {/* Display the selected image name if available */}
      {selectedImage && (
        <p>Selected Image: {selectedImage.name}</p>
      )}
      
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}



