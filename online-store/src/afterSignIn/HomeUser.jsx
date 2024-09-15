import React from 'react';
import UserNavBar from '../Components/UserNavBar'
import Section from '../Components/Section'
import firsthat from '../assets/kere.jpg';
import second from '../assets/omongwe.jpg';
import thirdhat from '../assets/Cuteness.jpg';
import forth from '../assets/mosemane.jpg';
import fifth from '../assets/bag.jpg';
import sixth from '../assets/pdress.jpg';
import seventh from '../assets/gdress.jpg';
import eigth from '../assets/redox.jpg';
import nineth from '../assets/pants.jpg';
import tenth from '../assets/dressk.jpg';
import eleventh from '../assets/pantstwo.jpg';
import twelveth from '../assets/fdress.jpg';

const HomeUser = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Section />
      <UserNavBar />
      <div className="pt-16 pb-16 px-16 flex-grow">

        <div className="py-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={firsthat}
              alt="greengirl"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dress</h3>
              <p className="text-gray-700">Price: R 320.00</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={second}
              alt="boybrown"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Pants</h3>
              <p className="text-gray-700">Price: R 349.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={thirdhat}
              alt="yellow"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Ball dress</h3>
              <p className="text-gray-700">Price: R 399.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={forth}
              alt="Brownboy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Sweater</h3>
              <p className="text-gray-700">Price: R 279.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={fifth}
              alt="flowerbag"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Flower Bag</h3>
              <p className="text-gray-700">Price: R 349.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={sixth}
              alt="purpledollfit"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dress</h3>
              <p className="text-gray-700">Price: R 255.93</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={seventh}
              alt="greydress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dress</h3>
              <p className="text-gray-700">Price: R 277.69</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={eigth}
              alt="Crochet Bag"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Crochet Bag</h3>
              <p className="text-gray-700">Price: R 233.65</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={nineth}
              alt="grannysquare"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Palazzo Pants</h3>
              <p className="text-gray-700">Price: R 264.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={tenth}
              alt="browndress "
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Summer dress</h3>
              <p className="text-gray-700">Price: R 250.00</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={eleventh}
              alt="blue pants"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Palazzo Pants</h3>
              <p className="text-gray-700">Price: R 299.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twelveth}
              alt="pinkdress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Summer Dress </h3>
              <p className="text-gray-700">Price: R 249.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeUser