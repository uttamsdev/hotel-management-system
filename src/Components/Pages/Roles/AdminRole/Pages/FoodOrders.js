// import React, { useEffect, useState } from "react";
// import FoodOrdersTable from "./FoodOrdersTable";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { MdFastfood } from "react-icons/md";

// const FoodOrders = () => {
//   const [allOrderData, setAllOrderData] = useState([]);
//   // console.log(orderData)

//   useEffect(() => {
//     fetch(
//       "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/order-food/all-foods-orders"
//     )
//       .then((res) => res.json())
//       .then((data) => setAllOrderData(data?.data));
//   }, []);
//   return (
//     <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
//       <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center">
//         <MdFastfood className="ml-5 mr-3 w-6 h-6" />
//         All Food Orders
//       </p>
//       <div className="overflow-x-auto">
//         <table className="table w-full xl:w-11/12 mx-auto">
//           {/* head */}
//           <thead className="bg-base-300">
//             <tr className="">
//               <th></th>
//               <th>Image</th>
//               <th>Food ID</th>
//               <th>Order ID</th>
//               <th>Email</th>
//               <th>name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {allOrderData.map((order, index) => (
//               <FoodOrdersTable
//                 key={order?.roomId}
//                 order={order}
//                 index={index}
//                 setAllOrderData={setAllOrderData}
//               ></FoodOrdersTable>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FoodOrders;

import React, { useEffect, useState } from "react";
import ReactPagination from "../../../Shared/Pagination";
import { MdFastfood } from "react-icons/md";
import FoodOrdersTable from "../../UserRole/Pages/FoodOrdersTable";


const ViewFoodOrders = () => {
  const [allOrderData, setAllOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/order-food/all-foods-orders"
      );

      const data = await res.json();

      console.log("res", data);
      if (data?.data?.length) {
        setAllOrderData(data?.data);
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
          <MdFastfood className="ml-2 mr-3 w-6 h-6" />
          All Foods Orders
        </div>
      </div>
      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          <thead className="bg-[#25b0cf] text-white text-sm">
            <tr>
              <th>Image</th>
              <th>Food ID</th>
              <th>Order ID</th>
              <th>Email</th>
              <th>name</th>
              <th>Price</th>
              <th className="text-center py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((order, index) => (
              <FoodOrdersTable
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

export default ViewFoodOrders;
