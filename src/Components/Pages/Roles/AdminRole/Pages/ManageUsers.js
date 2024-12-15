import React, { useEffect, useState } from "react";
import ManageUsersTable from "./ManageUsesTable";
import { FaUserShield } from "react-icons/fa6";
import ReactPagination from "../../../Shared/Pagination";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const getAllUsers = async () => {
    try {
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/users/get-users"
      );

      const data = await res.json();
      if (data?.data?.length) {
        setUsers(data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // Fetch data once
  useEffect(() => {
    getAllUsers();
  }, []);

  const tableData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return users.slice(startIndex, endIndex);
  }, [users, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-5 text-xl text-black mb-6 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <FaUserShield className="ml-2 mr-3 w-6 h-6" />
        All Users
      </p>
      <div></div>
      <div className="overflow-x-auto bg-white pb-5 mx-6 rounded  shadow-sm">
        <table className="table w-full mx-auto">
          {/* head */}
          <thead className="bg-[#25b0cf] text-white text-sm">
            <tr className="">
              {/* <th className="py-3"></th> */}
              <th className="py-3">User ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3 w-[100px]">Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((user, index) => (
              <ManageUsersTable
                key={index}
                user={user}
                index={index}
                setUsers={setUsers}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end pr-6 pt-5 border-t border-gray-100">
          <ReactPagination
            total={users?.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
