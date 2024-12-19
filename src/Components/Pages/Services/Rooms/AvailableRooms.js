import React, { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";
import ShowSingleRoom from "./ShowSingleRoom";

const AvailableRooms = () => {
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    setSearchData(JSON.parse(localStorage.getItem("search")));
  }, []);

  return (
    <div className="w-full container mx-auto min-h-[100vh_-_115px] pb-6">
      <div className="flex flex-col xl:flex-row justify-center gap-6 mt-8 bg-gradient-to-r from-cyan-50  to-sky-50 p-8 rounded-lg shadow">
        {/* Check-In Card */}
        <div className="flex items-center justify-between w-full p-4 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-all duration-300 border border-gray-200">
          <div className="flex items-center gap-4">
            <MdDateRange className="text-4xl text-cyan-600" />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">
                Check In
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {searchData?.startDate || "N/A"}
              </p>
            </div>
          </div>
          <button className="text-cyan-600 text-sm font-medium hover:underline">
            Edit
          </button>
        </div>

        {/* Check-Out Card */}
        <div className="flex items-center justify-between w-full p-4 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-all duration-300 border border-gray-200">
          <div className="flex items-center gap-4">
            <MdDateRange className="text-4xl text-cyan-600" />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">
                Check Out
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {searchData?.endDate || "N/A"}
              </p>
            </div>
          </div>
          <button className="text-cyan-600 text-sm font-medium hover:underline">
            Edit
          </button>
        </div>

        {/* Persons Card */}
        <div className="flex items-center justify-between w-full p-4 rounded-lg shadow-md bg-white hover:bg-cyan-50 transition-all duration-300 border border-gray-200">
          <div className="flex items-center gap-4">
            <FaPersonCircleCheck className="text-4xl text-cyan-600" />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">
                Persons
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {searchData?.person || 1}
              </p>
            </div>
          </div>
          <button className="text-cyan-600 text-sm font-medium hover:underline">
            Edit
          </button>
        </div>
      </div>

      <p className="uppercase text-[#000080] text-xl xl:text-2xl mt-8 font-bold mb-2">
        Available rooms:
      </p>
      <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
        {JSON.parse(localStorage.getItem("rooms"))?.data?.map((room) => (
          <ShowSingleRoom room={room} book={true}></ShowSingleRoom>
        ))}
      </div>
    </div>
  );
};

export default AvailableRooms;
