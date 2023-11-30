import React from "react";
import { useNavigate } from "react-router-dom";

const SingleAvailableRooms = ({ room }) => {
    const {roomId, name, price, img} =room;
    const navigate = useNavigate();

    const handleBookRoom = (roomId) => {
        navigate(`/book-room/${roomId}`);
    }
  return (
        <div className="w-[350px] h-[360px] shadow-xl bg-white relative">
          <img
          className="w-[350px] h-[210px]"
            src={img}
            alt=""
          />
          <div className="p-2">
            <p className="text-xl">{name}</p>
            <p className="text-lg">
              Price: {price} <span className="font-bold">BDT /Day</span>
            </p>
            <div className="flex justify-center">
              <button onClick={()=>{handleBookRoom(roomId)}} className="text-[#000080] w-[340px] mt-2 h-10 border border-[#000080] hover:bg-[#000080] duration-500 hover:text-white absolute bottom-4">
                Book Room
              </button>
            </div>
          </div>
        </div>

  );
};

export default SingleAvailableRooms;
