import React from 'react';
import Logo from '../assets/MyLogo.png';

const Section = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4" >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-32 sm:w-48 sm:h-44">
          <img 
            src={Logo} 
            alt="mylogo" 
            className="w-full h-full object-contain" 
          />
        </div>
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Welcome to SazzyStitches</h1>
        <p className="text-white text-md sm:text-lg text-center">
          Discover your cozzy crazy crochet creations right here!
        </p>
      </div>
    </div>
  );
};

export default Section;
