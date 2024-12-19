import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ShowSingleRoom = ({ room, book = false }) => {
  const { roomId, img, name, price, rating } = room;
  const navigate = useNavigate();

  const roomDetails = (roomId) => {
    navigate(`${book ? `/book-room/${roomId}` : `/room/${roomId}`}`);
  };

  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative h-56">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={img}
          alt={name}
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 px-3 py-1 rounded-full text-sm font-semibold text-white shadow-md">
          {/* {rating.toFixed(1)} */} 4
          <FaStar className="inline-block ml-1 text-yellow-200" />
        </div>
      </div>
      <div className="p-6">
        <h2 className={`text-xl font-semibold text-gray-800 mb-3`}>
          {name?.length > 26 ? `${name?.slice(0, 26)}...` : name}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Price:{" "}
          <span className="font-medium text-indigo-600">{price} BDT/DAY</span>
        </p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < 4 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => roomDetails(roomId)}
          className="w-full  py-2  px-4 primary-bg text-white font-medium rounded-md shadow-md hover:from-teal-700 hover:via-cyan-600 hover:to-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          {book ? "Book Room" : "Room Details"}
        </button>
      </div>
    </div>
  );
};

export default ShowSingleRoom;
