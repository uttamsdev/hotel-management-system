import React, { useContext, useEffect, useState } from "react";
// import { MyContext } from "../../../Context/Context";
import SingleAvailableRooms from "./SingleAvailableRooms";
import { MdDateRange } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";

const AvailableRooms = () => {
  // const { availableRooms, searchRoomData } = useContext(MyContext);
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    setSearchData(JSON.parse(localStorage.getItem("search")));
  }, []);

  return (
    <div className="w-full xl:w-[1100px] mx-auto h-screen">
      <div className="flex flex-col xl:flex-row gap-8 mt-6  bg-stone-200 p-4 rounded">
        <div className="flex w-[350px] h-16 border-2 border-cyan-200 items-center pl-4 rounded gap-2 bg-white">
          <MdDateRange className="text-3xl"></MdDateRange>
          <div>
            <p className="text-lg font-bold">Check In</p>
            <p className="text-lg">{searchData?.startDate}</p>
          </div>
        </div>
        <div className="flex w-[350px] h-16 border-2 border-cyan-200 items-center pl-4 rounded gap-2 bg-white">
          <MdDateRange className="text-3xl"></MdDateRange>
          <div>
            <p className="text-lg font-bold">Check out</p>
            <p className="text-lg">{searchData?.endDate}</p>
          </div>
        </div>
        <div className="flex w-[350px] h-16 border-2 border-cyan-200 items-center pl-4 rounded gap-2 bg-white">
          <FaPersonCircleCheck className="text-3xl"></FaPersonCircleCheck>
          <div>
            <p className="text-lg font-bold">Persons</p>
            <p className="text-lg">{searchData?.person || 1}</p>
          </div>
        </div>
      </div>

      <p className="uppercase text-[#000080] text-xl xl:text-2xl mt-8 font-bold mb-2">
        Available rooms:
      </p>
      <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
        {JSON.parse(localStorage.getItem("rooms"))?.data?.map((room) => (
          <SingleAvailableRooms room={room}></SingleAvailableRooms>
        ))}
      </div>
    </div>
  );
};

export default AvailableRooms;
