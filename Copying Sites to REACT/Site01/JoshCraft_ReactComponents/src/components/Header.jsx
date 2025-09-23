
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">
          <a href="/">JOSH KRAFT</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/about" className="text-gray-600 hover:text-blue-900">About</a>
          <a href="/issues" className="text-gray-600 hover:text-blue-900">Issues</a>
          <a href="/news" className="text-gray-600 hover:text-blue-900">News</a>
          <a href="/get-involved" className="text-gray-600 hover:text-blue-900">Get Involved</a>
          <a href="/donate" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Donate</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a href="/about" className="text-gray-600 hover:text-blue-900">About</a>
            <a href="/issues" className="text-gray-600 hover:text-blue-900">Issues</a>
            <a href="/news" className="text-gray-600 hover:text-blue-900">News</a>
            <a href="/get-involved" className="text-gray-600 hover:text-blue-900">Get Involved</a>
            <a href="/donate" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Donate</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
