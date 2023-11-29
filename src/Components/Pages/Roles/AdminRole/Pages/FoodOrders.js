import React, { useEffect, useState } from "react";
import FoodOrdersTable from "./FoodOrdersTable";

const FoodOrders = () => {
  const [allOrderData, setAllOrderData] = useState([])
  // console.log(orderData)

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/order-food/all-foods-orders").then(res => res.json()).then(data => setAllOrderData(data?.data))
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
              <th>Food ID</th>
              <th>Email</th>
              <th>name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allOrderData.map((order, index) => <FoodOrdersTable key={order?.roomId} order={order} index={index} setAllOrderData={setAllOrderData}></FoodOrdersTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodOrders;
