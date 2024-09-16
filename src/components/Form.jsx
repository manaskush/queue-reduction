import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    console.log({ name, aadhar, image });
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="flex justify-center  min-h-4 pt-10 pb-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-md p-3 w-full"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white font-bold py-3 px-4 rounded w-full hover:bg-purple-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
