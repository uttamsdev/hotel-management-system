import React, { useEffect, useState } from "react";
import AllFoodsTable from "./AllFoodsTable";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import ReactPagination from "../../../Shared/Pagination";

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);

  const [allRooms, setAllRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getALlFoods = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
      );

      const data = await res.json();
      if (data?.data?.length) {
        setAllFoods(data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Fetch data once
  useEffect(() => {
    getALlFoods();
  }, []);

  const tableData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allFoods.slice(startIndex, endIndex);
  }, [allFoods, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <IoFastFoodSharp className="ml-5 mr-3 w-6 h-6" />
        All Foods
      </p>

      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          {/* head */}
          <thead className="bg-[#25b0cf] text-white text-sm">
            <tr className="">
              <th className="py-3">Image</th>
              <th className="py-3">Food ID</th>
              <th className="py-3">Food Name</th>
              <th className="py-3">Price</th>
              <th className="py-3 text-center w-[120px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData?.map((food, index) => (
              <AllFoodsTable
                key={food?.foodId}
                food={food}
                index={index}
                setAllFoods={setAllFoods}
                refetch={getALlFoods}
              ></AllFoodsTable>
            ))}
          </tbody>
        </table>
        <div className="flex w-full justify-end pr-6 pt-5 border-t border-gray-100">
          <ReactPagination
            total={allRooms?.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
