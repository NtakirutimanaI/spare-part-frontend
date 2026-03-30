import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-2xl border border-gray-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          Welcome to Stock Inventory Management System
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Manage your spare parts stock efficiently and effectively. Keep track of your inventory, updates, and more all in one convenient place.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
