import React, { useEffect, useState } from "react";
import AllRoomsTable from "./AllRomsTable";
import { AiOutlineDashboard } from "react-icons/ai";
import { SiHomebridge } from "react-icons/si";


const AllRooms = () => {
  const [allRooms, setAllRooms] = useState([])
  // console.log(orderData)

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/products/rooms").then(res => res.json()).then(data => setAllRooms(data?.data))
  },[])
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
                  <p className=' border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center'><SiHomebridge className='ml-5 mr-3 w-6 h-6'/>All Rooms</p>

      <div className="overflow-x-auto">
        <table className="table w-full xl:w-11/12 mx-auto">
          {/* head */}
          <thead className="bg-base-300">
          <tr className="">
              <th></th>
              <th>Image</th>
              <th>Room ID</th>
              <th>Room Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allRooms.map((room, index) => <AllRoomsTable key={room?.roomId} room={room} index={index} setAllRooms={setAllRooms}></AllRoomsTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRooms;
