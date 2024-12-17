import React, { useEffect, useState } from "react";
import AllFoodsTable from "./AllFoodsTable";
import { IoFastFoodSharp } from "react-icons/io5";
import ReactPagination from "../../../Shared/Pagination";
import DefaultModal from "../../../../utils/Modal";
import AddEditFoodContent from "../../../../modalContent/AddEditFoodContent";
import BtnPrimary from "../../../../utils/BtnPrimary";
import { MdOutlineAdd } from "react-icons/md";

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [modalTitle, setModalTitle] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const getALlFoods = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
      );

      const data = await res.json();
      if (data?.data?.length) {
        setAllFoods(data?.data?.reverse());
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  //handle modal
  const handleAddFood = () => {
    setOpen(true);
    setModalTitle("Add Food");
    setModalContent(
      React.cloneElement(
        <AddEditFoodContent
          setOpen={setOpen}
          refetch={getALlFoods}
          btnText={"Add food"}
        />,
        { key: new Date().getTime() }
      )
    );
  };

  const handleEditFood = (data) => {
    console.log("room data", data);
    setOpen(true);
    setModalTitle("Edit Food");
    setModalContent(
      React.cloneElement(
        <AddEditFoodContent
          setOpen={setOpen}
          refetch={getALlFoods}
          editData={data}
          btnText={"Update"}
        />,
        {
          key: new Date().getTime(),
        }
      )
    );
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
      <div className=" border pl-4 pr-7 text-xl text-black h-14 mb-6 font-bold bg-[#F8FAFC] flex items-center justify-between ">
        <div className=" flex">
          <IoFastFoodSharp className="ml-2 mr-3 w-6 h-6" />
          All Foods
        </div>
        <BtnPrimary
          icon={<MdOutlineAdd style={{ fontSize: "20px" }} />}
          btnFun={handleAddFood}
        >
          Add Food
        </BtnPrimary>
      </div>

      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          {/* head */}
          <thead className="bg-[#25b0cf] text-white text-sm">
            <tr className="">
              <th className="py-3">Image</th>
              <th className="py-3">Food ID</th>
              <th className="py-3">Food Name</th>
              <th className="py-3">Price</th>
              <th className="py-3 text-center w-[110px]">Action</th>
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
                handleEditFood={handleEditFood}
              ></AllFoodsTable>
            ))}
          </tbody>
        </table>
        <div className="flex w-full justify-end pr-6 pt-5 border-t border-gray-100">
          <ReactPagination
            total={allFoods?.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <DefaultModal
        modalContent={modalContent}
        title={modalTitle}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default AllFoods;
