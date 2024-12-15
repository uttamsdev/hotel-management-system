import React, { useEffect, useState } from "react";
import AllRoomsTable from "./AllRomsTable";
import { SiHomebridge } from "react-icons/si";
import ReactPagination from "../../../Shared/Pagination";
import BtnPrimary from "../../../../utils/BtnPrimary";
import DefaultModal from "../../../../utils/Modal";
import AddRoomContent from "../../../../modalContent/AddRoomContent";
import { CgFileAdd } from "react-icons/cg";
import { MdOutlineAdd } from "react-icons/md";

const AllRooms = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [modalTitle, setModalTitle] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const getAllRooms = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
      );

      const data = await res.json();
      if (data?.data?.length) {
        setAllRooms(data?.data?.reverse());
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  //handle modal
  const handleAddRoom = () => {
    setOpen(true);
    setModalTitle("Add Room");
    setModalContent(
      React.cloneElement(
        <AddRoomContent setOpen={setOpen} refetch={getAllRooms} />,
        { key: new Date().getTime() }
      )
    );
  };

  const handleEditRoom = (data) => {
    console.log("room data", data);
    setOpen(true);
    setModalTitle("Edit Room");
    setModalContent(
      React.cloneElement(<AddRoomContent editData={data} />, {
        key: new Date().getTime(),
      })
    );
  };
  // Fetch data once
  useEffect(() => {
    getAllRooms();
  }, []);

  const tableData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allRooms.slice(startIndex, endIndex);
  }, [allRooms, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <div className=" border pl-4 pr-7 text-xl text-black h-14 mb-8 font-bold bg-[#F8FAFC] flex items-center justify-between ">
        <div className=" flex">
          <SiHomebridge className="ml-2 mr-3 w-6 h-6" />
          All Rooms
        </div>
        <BtnPrimary
          icon={<MdOutlineAdd style={{ fontSize: "20px" }} />}
          btnFun={handleAddRoom}
        >
          Add Room
        </BtnPrimary>
      </div>

      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full  mx-auto">
          {/* head */}
          <thead className="primary-bg text-white text-sm">
            <tr className="">
              <th className="py-3 w-[160px] !pl-3">Image</th>
              <th className="py-3">Room ID</th>
              <th className="py-3">Room Name</th>
              <th className="py-3">Price</th>
              <th className="py-3 text-center w-[120px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData?.map((room, index) => (
              <AllRoomsTable
                key={index}
                room={room}
                index={index}
                setAllRooms={setAllRooms}
                refetch={getAllRooms}
                content={modalContent}
                modalOpen={open}
                setModalOpen={setOpen}
                handleEditRoom={handleEditRoom}
              ></AllRoomsTable>
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
      <DefaultModal
        modalContent={modalContent}
        title={modalTitle}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default AllRooms;
