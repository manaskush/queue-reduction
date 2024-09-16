import React from 'react';
import Navbar from './components/Navabr';
import Form from './components/Form';
import SampleData from './components/SampleData';
import './index.css';




const App = () => {
  return ( <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Form />
      
      <div className="">
        <a
          href="https://github.com/lomash-choudhary/Hackathon-Project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline block text-center text-lg"
        >
          Visit the Project
        </a>
      </div>
      <br />
      <SampleData />
      
      </div>
  );
};

export default App;
