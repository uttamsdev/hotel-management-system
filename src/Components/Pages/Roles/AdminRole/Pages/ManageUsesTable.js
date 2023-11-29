import React from 'react'
import swal from 'sweetalert';

const ManageUsersTable = ({user, index, setUsers}) => {
    const { _id, name, email, role } = user;

    const handleDeleteOrder = async (roomId) => {
        // alert(`Clicked on ${roomId}`)
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            const url = `http://localhost:5000/api/v1/orders/delete-room-order/${roomId}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
            swal("The order is Deleted", {
              icon: "success",
            });
    
            //this second fetched is use to refresh delete data 
            fetch("http://localhost:5000/api/v1/orders/room-orders").then(res => res.json()).then(data => setUsers(data?.data))
          } else {
            swal("Oder not deleted. You canceled it!");
          }
        });
      };
  return (
    <tr>
    <th>{index + 1}</th>
    <td>{_id}</td>
    <td>{name}</td>
    <td>{email}</td>
    <td>{role}</td>
  </tr>
  )
}

export default ManageUsersTable;