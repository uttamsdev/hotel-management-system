import React, { useEffect, useState } from "react";
import ShowSingleRoom from "../Services/Rooms/ShowSingleRoom";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      "https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/products/rooms"
    )
      .then((res) => res.json())
      .then((data) => setRooms(data?.data.slice(0, 6)));
  }, []);
  return (
    <div className="w-full xl:w-[1100px] mx-auto mt-12 border-t">
      <div className="flex justify-between">
        <p className="text-xl xl:text-2xl font-semibold text-[#000080] uppercase mt-3 mb-2">
          Rooms we offer
        </p>
        <p>
          <Link className="link link-error text-[18px]" to="/rooms">
            Show All Rooms
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
        {rooms?.map((room) => (
          <ShowSingleRoom key={room?.roomId} room={room}></ShowSingleRoom>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
