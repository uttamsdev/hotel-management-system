import React, { useEffect, useState } from "react";
import ShowSingleRoom from "../Services/Rooms/ShowSingleRoom";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
    )
      .then((res) => res.json())
      .then((data) => {
        setRooms(data?.data.slice(0, 6));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <section className="py-8 ">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Rooms We Offer
          </h2>
          <Link
            to="/rooms"
            className="text-[var(--primary)] hover:text-primary-dark text-lg font-medium transition-colors hover:underline  "
          >
            Show All Rooms →
          </Link>
        </div>

        {/* Room Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg text-gray-500 animate-pulse ">
              Loading rooms...
            </p>
          </div>
        ) : rooms?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {rooms?.map((room) => (
              <ShowSingleRoom key={room?.roomId} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No rooms available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;
  