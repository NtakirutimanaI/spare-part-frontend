import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Stock Inventory
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 justify-center flex-1">
          <li>
            <Link to="/" className="inline-block px-5 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-medium transition-all duration-300 shadow-md active:scale-95">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="inline-block px-5 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-medium transition-all duration-300 shadow-md active:scale-95">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="inline-block px-5 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-medium transition-all duration-300 shadow-md active:scale-95">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="inline-block px-5 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-medium transition-all duration-300 shadow-md active:scale-95">
              Register
            </Link>
          </li>
        </ul>

        {/* Right Side: Empty element to balance the flexbox and ensure pure center alignment */}
        <div className="flex-1"></div>
      </div>
    </nav>
  );
}

export default Navbar;
