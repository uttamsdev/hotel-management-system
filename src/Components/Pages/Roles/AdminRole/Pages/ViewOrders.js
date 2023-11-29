import React, { useEffect, useState } from "react";
import ViewOrderTable from "./ViewOrderTable";

const ViewOrders = () => {
  const [allOrderData, setAllOrderData] = useState([])
  // console.log(orderData)

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/orders/room-orders").then(res => res.json()).then(data => setAllOrderData(data?.data))
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
            {
              allOrderData.map((order, index) => <ViewOrderTable key={order?.roomId} order={order} index={index} setAllOrderData={setAllOrderData}></ViewOrderTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
