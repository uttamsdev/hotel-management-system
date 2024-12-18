import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ShowSingleRoom = ({ room }) => {
  const { roomId, img, name, price, rating } = room;
  const navigate = useNavigate();

  const roomDetails = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-56">
        <img className="w-full h-full object-cover" src={img} alt={name} />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
          {/* {rating.toFixed(1)} */} 5
          <FaStar className="inline-block ml-1 text-yellow-400" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
        <p className="text-lg mb-4">
          Price:{" "}
          <span className="font-bold text-indigo-600">{price} BDT/DAY</span>
        </p>
        <div className="flex items-center mb-4">
          {[...Array(5)]?.map((_, index) => (
            <FaStar
              key={index}
              className={`w-5 h-5 ${
                index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => roomDetails(roomId)}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Room Details
        </button>
      </div>
    </div>
  );
};

export default ShowSingleRoom;
