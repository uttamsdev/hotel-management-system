import React, { useEffect, useState } from "react";
import AllRoomsTable from "./AllRomsTable";

const AllRooms = () => {
  const [allRooms, setAllRooms] = useState([])
  // console.log(orderData)

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/products/rooms").then(res => res.json()).then(data => setAllRooms(data?.data))
  },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
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
