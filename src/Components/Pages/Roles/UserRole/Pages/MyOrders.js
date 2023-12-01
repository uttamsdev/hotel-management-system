import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import GetOrders from "./GetOrders";
import { FaHome } from "react-icons/fa";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderData, setOrderData] = useState([]);

  console.log(orderData);

  useEffect(() => {
    fetch(
      `https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/orders/room/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data?.data));
  }, [user?.email, setOrderData]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="relative bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl">
        <FaHome className="ml-5 mr-3 w-6 h-6" />
        My Room Orders
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full xl:w-11/12  mx-auto">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th></th>
              <th>Image</th>
              <th>RoomId</th>
              <th>Name</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderData.map((order, index) => (
              <GetOrders
                key={order.roomId}
                index={index}
                order={order}
                orderData={orderData}
                user={user}
                setOrderData={setOrderData}
              ></GetOrders>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
