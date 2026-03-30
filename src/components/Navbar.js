import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Stock Inventory
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          </li>
          <li>
            <Link to="/inventory" className="hover:text-blue-200 transition">Inventory</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
