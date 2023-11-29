import React, { useEffect, useState } from "react";
import ManageUsersTable from "./ManageUsesTable";

const ManageUsers = () => {
  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/users/get-users").then(res => res.json()).then(data => setUsers(data?.data))
  },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
          <tr className="">
              <th></th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <ManageUsersTable key={user?.email} user={user} index={index} setUsers={setUsers}></ManageUsersTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
