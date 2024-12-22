import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import userPhoto from "../../../../assets/avatar.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { motion } from 'framer-motion'

import {
  FaUsers,
  FaBed,
  FaUtensils,
  FaChartLine,
  FaCalendarCheck,
} from "react-icons/fa";
import ViewOrderTable from "./ViewOrderTable";

const AdminDashboard = () => {
  
  const [user, loading, error] = useAuthState(auth);
  const [allOrderData, setAllOrderData] = useState([]);
  

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/room-orders"
      );

      const data = await res.json();

      console.log("res", data);
      if (data?.data?.length) {
        setAllOrderData(data?.data?.reverse()?.slice(0, 8));
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  // Fetch data once
  useEffect(() => {
    getAllOrders();
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  const profilePic = user.photoURL || userPhoto;
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 min-h-[calc(100vh_-_70px)]">
      <p className=" border pl-2 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <AiOutlineDashboard className="ml-5 mr-3 w-6 h-6" />
        Administrator Dashboard
      </p>
      <div className="px-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            <StatCard
              title="Total Users"
              value="234"
              icon={<FaUsers className="text-blue-500" />}
            />
            <StatCard
              title="Room Orders"
              value="167"
              icon={<FaBed className="text-green-500" />}
            />
            <StatCard
              title="Food Orders"
              value="290"
              icon={<FaUtensils className="text-yellow-500" />}
            />
            <StatCard
              title="Total Rooms"
              value="100"
              icon={<FaBed className="text-purple-500" />}
            />
            <StatCard
              title="Total Foods"
              value="50"
              icon={<FaUtensils className="text-red-500" />}
            />
          </div>
        </div>

        <div>
          <p className="text-lg mb-2 font-medium ">Recent Orders</p>
          <div className="overflow-x-auto bg-white   rounded  shadow-sm">
            <table className="table w-full mx-auto">
              <thead className="bg-[#0284c7] text-white text-sm">
                <tr>
                  <th className="py-3">Image</th>
                  <th className="py-3">Room ID</th>
                  <th className="py-3">Order ID</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">StartDate</th>
                  <th className="py-3">EndDate</th>
                  <th className="py-3">Price</th>
                  <th className="text-center py-3 w-[80px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrderData?.map((order, index) => (
                  <ViewOrderTable
                    key={index} // Ensure unique keys
                    order={order}
                    setAllOrderData={setAllOrderData}
                    refetch={getAllOrders}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


const StatCard = ({ title, value, icon }) => (
  
  
  <motion.div
      className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg p-6 flex items-center space-x-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer"
   
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl text-blue-500 dark:text-blue-400"
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700 mb-1">{title}</h3>
        <p className="text-3xl font-semibold text-gray-600  tracking-tight">{value}</p>
      </div>
    </motion.div>
);
