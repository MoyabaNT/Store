import React, { useState } from 'react';
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
import eleven from '../assets/doubleruffles.jpg';
import twelve from '../assets/Veryfluffy.jpg';
import thirteen from '../assets/brownruffles.jpg';
import forteen from '../assets/omongwe.jpg';
import fifteen from '../assets/supa.jpg';
import sixteen from '../assets/lime.jpg';
import seventeen from '../assets/kere.jpg';
import eighteen from '../assets/gdress.jpg';
import nineteen from '../assets/mosemane.jpg';
import twenty from '../assets/hlano.jpg';
import twentyone from '../assets/cuteness.jpg';
import NavBar from './NavBar';
import { TbBrightnessDownFilled } from "react-icons/tb";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleImageClick = (product) => {
    setActiveProduct(product);
  };

  const closeFullscreen = () => {
    setActiveProduct(null);
  };

  const products = [
    { id: 1, img: firsthat, alt: "Purple bag", name: "Purple bag", price: "R 399.99" },
    { id: 2, img: second, alt: "Red Bag", name: "Red Bag", price: "R 349.99" },
    { id: 3, img: thirdhat, alt: "Flower Bag", name: "Flower Bag", price: "R 235.75" },
    { id: 4, img: forth, alt: "Blue dress", name: "Blue dress", price: "R 213.25" },
    { id: 5, img: fifth, alt: "Yello Bag", name: "Yello Bag", price: "R 350" },
    { id: 6, img: sixth, alt: "Blue dress", name: "Blue dress", price: "R 349.99" },
    { id: 7, img: seventh, alt: "Blue Hat", name: "Blue hat", price: "R 369.99" },
    { id: 8, img: eigth, alt: "Red Bag", name: "Red Bag", price: "R 229.39" },
    { id: 9, img: nineth, alt: "Blue pants", name: "Blue Pants", price: "R 149.99" },
    { id: 10, img: tenth, alt: "Brown dress", name: "Brown dress", price: "R 349.99" },
    { id: 11, img: eleven, alt: "Double ruffles", name: "Double ruffles", price: "R 389.70" },
    { id: 12, img: twelve, alt: "Fluffy hat", name: "Fluffy hat", price: "R 359.69" },
    { id: 13, img: thirteen, alt: "Brown ruffles", name: "Brown ruffles", price: "R 249.99" },
    { id: 14, img: forteen, alt: "Brown pants", name: "Brown pants", price: "R 139.99" },
    { id: 15, img: fifteen, alt: "Ruffle hat", name: "Ruffle hat", price: "R 349.99" },
    { id: 16, img: sixteen, alt: "Lime bag", name: "Lime Bag ", price: "R 329.29" },
    { id: 17, img: seventeen, alt: "Side bag ", name: " Side bag", price: "R 149.99" },
    { id: 18, img: eighteen, alt: "Brown dress", name: "Ruffle hat", price: "R 249.99" },
    { id: 19, img: nineteen, alt: "Blue 2 piece ", name: " Blue 2 piece", price: "R 349.99" },
    { id: 20, img: twenty, alt: "blue dress", name: "Blue Dress", price: "R 319.99" },
    { id: 21, img: twentyone, alt: "Yellow dress", name: "Yellow dress", price: "R 449.99" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <NavBar />

      <div className="pt-16 pb-16 px-16 flex-grow">
        <div className='flex'>
          <label className='px-6'>View Catalogue</label>
          <label className='text-purple-500'> <TbBrightnessDownFilled size={30} /></label>
        </div>

        {activeProduct ? (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row items-start w-full h-full">
              <div className="w-full md:w-3/4 lg:max-w-[50vw] lg:max-h-[80vh] h-auto overflow-hidden">
                <img
                  src={activeProduct.img}
                  alt={activeProduct.alt}
                  className="w-full h-full object-contain"
                  onClick={closeFullscreen}
                />
              </div>
              <div className="w-full md:w-1/4 p-4 bg-white shadow-lg md:ml-4 mt-4 md:mt-0">
                <h3 className="text-purple-500 font-semibold text-3xl">{activeProduct.name}</h3>
                <p className="text-gray-700 text-xl mt-4">Price: {activeProduct.price}</p>
                <p className="text-gray-500 text-sm mt-2">Sign in to add to cart</p>
                <button
                  className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
                  onClick={closeFullscreen}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative shadow-lg w-full h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                  onClick={() => handleImageClick(product)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
                  <h3 className="text-purple-500 font-semibold">{product.name}</h3>
                  <p className="text-gray-700">Price: {product.price}</p>
                  <p className="text-xs text-gray-500">Sign in to add to cart</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
