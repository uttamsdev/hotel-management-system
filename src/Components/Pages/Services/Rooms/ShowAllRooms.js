import React, { useEffect, useState } from "react";
import ShowSingleRoom from "./ShowSingleRoom";
import Skeleton from "../../../utils/Skeleton";

const ShowAllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetFoods = async () => {
    setLoading(true);
    const res = await fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
    );
    const data = await res.json();
    setRooms(data?.data);
    setLoading(false);
  };
  useEffect(() => {
    handleGetFoods();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="w-full xl:w-[1100px] mx-auto pb-6 xl:min-h-[100vh_-115px] ">
      <div>
        <div>
          <p className="uppercase text-[#000080] text-2xl mt-8 font-bold mb-2">
            Our All Rooms
          </p>
        </div>
        <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
          {rooms?.map((room) => (
            <ShowSingleRoom key={room?.roomId} room={room}></ShowSingleRoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllRooms;
