import React from 'react';
import UserNavBar from '../Components/UserNavBar'
import Section from '../Components/Section';
import { TbBrightnessDownFilled } from "react-icons/tb";
import firsthat from '../assets/afrobeauty.jpg';
import second from '../assets/reddress.jpg';
import thirdhat from '../assets/bag.jpg';
import forth from '../assets/standing.jpg';
import fifth from '../assets/yelllooo.jpg';
import sixth from '../assets/pdress.jpg';
import seventh from '../assets/blueruffle.jpg';
import eigth from '../assets/redox.jpg';
import nineth from '../assets/pants.jpg';
import tenth from '../assets/dressk.jpg';
import eleventh from '../assets/shoo.jpg';
import twelveth from '../assets/fdress.jpg';
import thirteenth from '../assets/Cuteness.jpg';
import forteenth from '../assets/bigdress.jpg';
import fifteenth from '../assets/wow.jpg';
import sixteenth from '../assets/brownruffles.jpg';
import seventeen from '../assets/kere.jpg';
import eighteen from '../assets/gdress.jpg';
import nineteen from '../assets/mosemane.jpg';
import twenty from '../assets/lime.jpg';
import twentyone from '../assets/inblue.jpg';
import twentytwo from '../assets/pantstwo.jpg';
import twentythree from '../assets/omongwe.jpg';
import twentyfour from '../assets/hatssss.jpg';

const OurProducts = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Section />
      <UserNavBar />
      <div className="pt-16 pb-16 px-16 flex-grow">
      <div className='flex'>
      <label className='px-6'>View Catalogue</label>
      <label className=' text-purple-500'> <TbBrightnessDownFilled size={30} /></label>
      </div>

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
              alt="girlred"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dess</h3>
              <p className="text-gray-700">Price: R 379.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={thirdhat}
              alt="bag"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Flower Bag</h3>
              <p className="text-gray-700">Price: R 299.99</p>
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
              <h3 className="text-purple-500 font-semibold">Doll Dress</h3>
              <p className="text-gray-700">Price: R 279.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={fifth}
              alt="yellowdress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Yellow Dress </h3>
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
              alt="hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Ruffle Hat</h3>
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
              alt="bluepants"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Pants</h3>
              <p className="text-gray-700">Price: R 239.99</p>
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

          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={thirteenth}
              alt="yellowgown"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Ball Dress </h3>
              <p className="text-gray-700">Price: R 399.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={forteenth}
              alt="pinkhimandress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Summer Dress </h3>
              <p className="text-gray-700">Price: R 379.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={fifteenth}
              alt="hat"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Ruffle Hat </h3>
              <p className="text-gray-700">Price: R 249.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={sixteenth}
              alt="ruffles"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Ruffle Hat </h3>
              <p className="text-gray-700">Price: R 249.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={seventeen}
              alt="greendress"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dress </h3>
              <p className="text-gray-700">Price: R 289.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={eighteen}
              alt="gray"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Dress </h3>
              <p className="text-gray-700">Price: R 249.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={nineteen}
              alt="grwearay"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Winter Wear </h3>
              <p className="text-gray-700">Price: R 269.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twenty}
              alt="lime"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Bag </h3>
              <p className="text-gray-700">Price: R 329.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twentyone}
              alt="grjersyeay"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Sweater </h3>
              <p className="text-gray-700">Price: R 249.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twentytwo}
              alt="bluepants"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Palazzo Pants  </h3>
              <p className="text-gray-700">Price: R 299.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twentythree}
              alt="grpanthsay"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold">Doll Pants </h3>
              <p className="text-gray-700">Price: R 189.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>
          <div className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={twentyfour}
              alt="ruffles"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
              <h3 className="text-purple-500 font-semibold"> Ruffle Hat </h3>
              <p className="text-gray-700">Price: R 369.99</p>
              <button className="text-xs text-gray-900 hover:text-white bg-purple-600 py-2 px-2">Add to cart</button>
              <button className="text-xs text-gray-900 hover:text-white py-2 ml-6 px-2">View</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurProducts