import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import GetOrders from "./GetOrders";
import { FaHome } from "react-icons/fa";
import ReactPagination from "../../../Shared/Pagination";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/room/${user?.email}`
      );

      const data = await res.json();

      console.log("res", data);
      if (data?.data?.length) {
        setOrderData(data?.data?.reverse());
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  // Fetch data once

  // Calculate the data slice for the current page
  const tableData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orderData.slice(startIndex, endIndex);
  }, [orderData, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllOrders();
  }, [orderData]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="relative bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-2 text-xl text-black mb-6 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <FaHome className="ml-5 mr-3 w-6 h-6" />
        My Room Orders
      </p>
      <div className="overflow-x-auto  bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          {/* head */}
          <thead className="bg-[#06b6d4] text-white text-sm">
            <tr>
              <th>Image</th>
              <th>Room ID</th>
              <th>Order ID</th>
              <th>Name</th>
              <th>Check-Out</th>
              <th>Check-In</th>
              <th>Price</th>
              <th className="w-[100px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData?.map((order, index) => (
              <GetOrders
                key={index}
                order={order}
                refetch={getAllOrders}
              ></GetOrders>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end pr-6 pt-5 border-t border-gray-100">
          <ReactPagination
            total={orderData?.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
