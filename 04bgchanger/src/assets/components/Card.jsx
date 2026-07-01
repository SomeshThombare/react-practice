import React from 'react';

export default function Card() {
  // Extracted star rating logic for cleanliness
 const renderStars = (rating) => {
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          // Changed w-4 h-4 to w-3 h-3 for smaller stars
          className={`w-3 h-3 ${
            i < Math.floor(rating)
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400 align-middle">
        ({rating})
      </span>
    </div>
  );
};   

  return (
    <div className="group w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Image Section with Zoom Effect */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        <a href="/">
          <img
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Product"
          />
          {/* Optional Badge */}
          <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
            New
          </span>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col h-full">
        <a href="/" className="block mb-2">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        
        <div className="mb-4">
          {renderStars(4)}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400 block">Price</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}   