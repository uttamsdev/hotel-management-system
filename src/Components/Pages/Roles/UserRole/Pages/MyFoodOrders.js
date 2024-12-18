import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading";
import FoodOrdersTable from "./FoodOrdersTable";
import { IoFastFoodSharp } from "react-icons/io5";
import ReactPagination from "../../../Shared/Pagination";

const MyFoodOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/order-food/${user?.email}`
      );
      const data = await res.json();
      if (data?.data?.length) {
        setOrderData(data?.data?.reverse());
      }
    } catch (error) {
      console.log("error", error);
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
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="relative  mx-auto bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height ">
      <p className=" border pl-2 text-xl text-black mb-6 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <IoFastFoodSharp className="ml-5 mr-3 w-6 h-6" />
        My Food Orders
      </p>
      <div className="overflow-x-auto  bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full   mx-auto">
          {/* head */}
          <thead className="bg-[#06b6d4] text-white text-s">
            <tr>
              <th>Image</th>
              <th>Food ID</th>
              <th>Order ID</th>
              <th>Email</th>
              <th>Food Name</th>
              <th>Price</th>
              <th className="w-[100px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData?.map((order, index) => (
              <FoodOrdersTable
                key={index}
                order={order}
                refetch={getAllOrders}
              ></FoodOrdersTable>
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

export default MyFoodOrders;
