import React, { useState } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { HiOutlineSortAscending, HiOutlineShoppingCart, HiOutlineShoppingBag } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import Logo from '../assets/MyLogo.png';
import { Link } from "react-router-dom";

const UserNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 z-40`} // Ensure Sidebar has a high z-index
      >
        <div>
          <img src={Logo} alt="mylogo" />
        </div>
        <ul className="space-y-4 text-lg font-medium">
          <Link to="/about">
            <li className="hover:text-purple-300 transition-colors duration-200">About</li>
          </Link>
          <Link to="products">
            <li className="hover:text-purple-300 transition-colors duration-200">Products</li>
          </Link>
          <Link to="/customize">
            <li className="hover:text-purple-300 transition-colors duration-200">Customize</li>
          </Link>
          <li className="hover:text-purple-300 transition-colors duration-200">Category</li>
          <ul className="ml-4">
            <li className="hover:text-purple-300 transition-colors duration-200">
              <Link to="/Women">Women Clothing</Link>
            </li>
            <li className="hover:text-purple-300 transition-colors duration-200">
              <Link to="/men">Men Clothing</Link>
            </li>
          </ul>
        </ul>
      </div>

      {/* Bottom NavBar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg text-gray-900 p-4 z-50"> {/* z-50 to ensure it's always visible */}
        <div className="container mx-auto flex justify-between items-center">
          {/* Sidebar Toggle Button */}
          <button className="flex-grow">
            <HiOutlineSortAscending size={25} onClick={toggleSidebar} className="cursor-pointer text-purple-500" />
          </button>

          {/* Icons in the Center */}
          <div className="flex-grow flex justify-center space-x-36 lg:mr-52"> {/* Centers the icons */}
            <button>
              <Link to="/">
                <ImHome size={25} className="cursor-pointer text-purple-500" />
              </Link>
            </button>
            <button>
              <Link to="/HomeShop">
                <HiOutlineShoppingBag size={25} className="cursor-pointer text-purple-500" />
              </Link>
            </button>
            <button>
              <Link to="/HomeCart">
                <HiOutlineShoppingCart size={25} className="cursor-pointer text-purple-500" />
              </Link>
            </button>
          </div>

          {/* Sign In Button */}
          <div className="text-purple-500 font-bold text-lg hover:text-purple-300 shadow-sm px-2 py-2 rounded-lg">
            <UserButton forceRedirectUrl="/HomeUser" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavBar;
