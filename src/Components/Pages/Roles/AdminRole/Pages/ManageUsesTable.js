import React from "react";

const ManageUsersTable = ({ user, index, setUsers }) => {
  const { _id, name, email, role } = user;

  return (
    <tr className="!py-3">
      {/* <th>{index + 1}</th> */}
      <td className="!py-3">{_id}</td>
      <td className="!py-3">{name}</td>
      <td className="!py-3">{email}</td>
      <td className="!py-3">{role}</td>
    </tr>
  );
};

export default ManageUsersTable;
