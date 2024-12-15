import React, { useEffect, useState } from "react";
import ViewOrderTable from "./ViewOrderTable";
import { TbHomeBolt } from "react-icons/tb";
import ReactPagination from "../../../Shared/Pagination";
import { Skeleton } from "antd";

const ViewOrders = () => {
  const [allOrderData, setAllOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/room-orders"
      );

      const data = await res.json();

      console.log("res", data);
      if (data?.data?.length) {
        setAllOrderData(data?.data?.reverse());
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

  // Calculate the data slice for the current page
  const tableData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allOrderData.slice(startIndex, endIndex);
  }, [allOrderData, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <div className="border pl-4 text-xl text-black mb-5 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <div className="flex">
          <TbHomeBolt className="ml-2 mr-3 w-6 h-6" />
          All Rooms Orders
        </div>
      </div>
      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          <thead className="bg-[#25b0cf] text-white text-sm">
            <tr>
              <th className="py-3">Image</th>
              <th className="py-3">Room ID</th>
              <th className="py-3">Order ID</th>
              <th className="py-3">Email</th>
              <th className="py-3">StartDate</th>
              <th className="py-3">EndDate</th>
              <th className="py-3">Price</th>
              <th className="text-center py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((order, index) => (
              <ViewOrderTable
                key={index} // Ensure unique keys
                order={order}
                setAllOrderData={setAllOrderData}
                refetch={getAllOrders}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-end pr-6 pt-5 border-t border-gray-100">
          <ReactPagination
            total={allOrderData?.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
