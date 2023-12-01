import React, { useEffect, useState } from "react";
import ViewOrderTable from "./ViewOrderTable";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbHomeBolt } from "react-icons/tb";

const ViewOrders = () => {
  const [allOrderData, setAllOrderData] = useState([]);
  // console.log(orderData)

  useEffect(() => {
    fetch(
      "https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/orders/room-orders"
    )
      .then((res) => res.json())
      .then((data) => setAllOrderData(data?.data));
  }, []);
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <TbHomeBolt className="ml-5 mr-3 w-6 h-6" />
        All Rooms Orders
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full xl:w-11/12 mx-auto">
          {/* head */}
          <thead className="bg-base-300">
            <tr className="">
              <th></th>
              <th>Image</th>
              <th>RoomId</th>
              <th>Email</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allOrderData.map((order, index) => (
              <ViewOrderTable
                key={order?.roomId}
                order={order}
                index={index}
                setAllOrderData={setAllOrderData}
              ></ViewOrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
