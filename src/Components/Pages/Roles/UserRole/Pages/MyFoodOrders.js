import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import FoodOrdersTable from "./FoodOrdersTable";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";

const MyFoodOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderData, setOrderData] = useState([]);

  console.log(orderData);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/order-food/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data?.data));
  }, [user?.email, setOrderData]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="relative  mx-auto bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height ">
      <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl">
        <IoFastFoodSharp className="ml-5 mr-3 w-6 h-6" />
        My Food Orders
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full xl:w-11/12  mx-auto">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Food ID</th>
              <th>Order ID</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderData.map((order, index) => (
              <FoodOrdersTable
                key={order.foodId}
                index={index}
                order={order}
                orderData={orderData}
                user={user}
                setOrderData={setOrderData}
              ></FoodOrdersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodOrders;
