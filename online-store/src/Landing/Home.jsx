import React from 'react';
import firsthat from '../assets/doubleruffles.jpg';
import thirdhat from '../assets/Veryfluffy.jpg';
import forthhat from '../assets/brownruffles.jpg';
import sixth from '../assets/bag.jpg';
import seventh from '../assets/pdress.jpg';
import eigth from '../assets/gdress.jpg';

import NavBar from './NavBar';
import Section from '../Components/Section';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Section />
      <NavBar /> 

      <div className="pt-16 pb-16 px-16 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={seventh}
              alt="Purple Hat & Dress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Purple Hat & Dress</h3>
              <p className="text-gray-700">Price: R 400</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={eigth}
              alt="Dramatic Ruffles Hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll in ruffles</h3>
              <p className="text-gray-700">Price: R 350</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={thirdhat}
              alt="Fluffy Hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Fluffy Hat</h3>
              <p className="text-gray-700">Price: R 400</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={forthhat}
              alt="Brown Ruffles Hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Brown Ruffles Hat</h3>
              <p className="text-gray-700">Price: R 250</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={firsthat}
              alt="Blue Ruffles Hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Blue Ruffles Hat</h3>
              <p className="text-gray-700">Price: R 350</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={sixth}
              alt="Crochet Bag"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Crochet Bag</h3>
              <p className="text-gray-700">Price: R 250</p>
              <p className="text-xs text-gray-500">Sign in to add to cart</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
