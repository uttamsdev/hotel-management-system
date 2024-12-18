import React, { useEffect, useState } from "react";
import ShowSingleRoom from "../Services/Rooms/ShowSingleRoom";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
    )
      .then((res) => res.json())
      .then((data) => setRooms(data?.data.slice(0, 6)));
  }, []);

  return (
    <div className="py-6">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-4 00 pt-1">
          <h2 className="text-2xl  font-bold text-gray-800">
            Rooms We Offer
          </h2>
          <Link
            to="/rooms"
            className="text-teal-600 hover:text-teal-700 text-lg font-medium underline transition"
          >
            Show All Rooms
          </Link>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms?.map((room) => (
            <ShowSingleRoom key={room?.roomId} room={room}></ShowSingleRoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
