import React from "react";

const Skeleton = () => {
  return (
    <div className="container grid grid-cols-3 gap-4 !mt-6 h-[calc(100vh_-_115px)]">
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
      <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden animate-pulse">
        <div className="relative h-56 bg-gray-300 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded-md mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-3 w-full"></div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-gray-300 rounded-full mr-1"
              ></div>
            ))}
          </div>
          <div className="h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
