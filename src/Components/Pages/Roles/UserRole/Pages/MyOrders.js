import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import GetOrders from "./GetOrders";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderData, setOrderData] = useState([]);

  console.log(orderData)
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/orders/room/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data?.data));
  }, [user?.email]);
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="relative -z-50">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th></th>
              <th>Image</th>
              <th>RoomId</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              orderData.map((order, index ) => <GetOrders  key={order.roomId} index={index} order={order}></GetOrders>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
