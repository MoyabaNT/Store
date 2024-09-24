import React, { useState } from 'react';
import UserNavBar from '../Components/UserNavBar';
const OptionalCustomization = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSizeSelected, setIsSizeSelected] = useState(false); // New state for checkbox
  const [size, setSize] = useState(''); // New state for size input

  // This function handles the file input change event
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview the selected image
      setErrorMessage(''); // Clear any previous error message if an image is selected
    }
  };

  // This function handles the additional details input
  const handleDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };

  // This function handles the checkbox change for "Add size"
  const handleCheckboxChange = () => {
    setIsSizeSelected(!isSizeSelected); // Toggle the checkbox state
  };

  // This function handles the size input
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // This function handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if an image is uploaded before submitting
    if (selectedImage) {
      setNotification('Custom design added to cart!');
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Please upload an image before submitting.');
      setNotification(''); // Clear any previous notification
    }
  };

  return (
    <div>
      <UserNavBar />
    <div className="flex justify-center items-center h-full bg-slate-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Optional Customization</h2>

        {/* Display the image preview box above the file input */}
        {selectedImage && (
          <div className="border border-gray-300 p-4 mb-4">
            <h3 className="font-semibold mb-2">Image Preview:</h3>
            <img src={selectedImage} alt="Selected" className="w-72 h-auto mx-auto" />
          </div>
        )}

        {/* Image upload input */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4 block mx-auto" />
        <label className="block mb-4">Upload your design, and we will bring it to life</label>

        {/* Input for additional details */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add additional details"
            value={additionalDetails}
            onChange={handleDetailsChange}
            className="px-4 py-2 w-full max-w-md border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox for size */}
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isSizeSelected}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Add size</span>
          </label>
        </div>

        {/* Size input field (only visible if checkbox is checked) */}
        {isSizeSelected && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter size"
              value={size}
              onChange={handleSizeChange}
              className="px-4 py-2 w-full max-w-md border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Submit button */}
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Design
          </button>
        </div>

        {/* Error message if no image is uploaded */}
        {errorMessage && (
          <div className="mt-4 text-red-600 font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Notification after submission */}
        {notification && (
          <div className="mt-4 text-green-600 font-semibold">
            {notification}
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default OptionalCustomization;
