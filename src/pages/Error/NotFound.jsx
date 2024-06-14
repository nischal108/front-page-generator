// src/pages/NotFound/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Not Found"
        className="w-1/2 h-auto  mt-[-180px]"
      />
      <div className="text-center mt-[-90px]">
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
