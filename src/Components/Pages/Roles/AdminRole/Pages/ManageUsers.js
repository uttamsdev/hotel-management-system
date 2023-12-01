import React, { useEffect, useState } from "react";
import ManageUsersTable from "./ManageUsesTable";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa6";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch(
      "https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/users/get-users"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data?.data));
  }, []);
  return (
    <div className="bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height">
      <p className=" border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center">
        <FaUserShield className="ml-5 mr-3 w-6 h-6" />
        All Users
      </p>
      <div></div>
      <div className="overflow-x-auto">
        <table className="table w-full xl:w-11/12 mx-auto">
          {/* head */}
          <thead className="bg-base-300">
            <tr className="">
              <th></th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ManageUsersTable
                key={user?.email}
                user={user}
                index={index}
                setUsers={setUsers}
              ></ManageUsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
