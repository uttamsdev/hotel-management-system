import React from 'react'
import swal from 'sweetalert';

const AllRoomsTable = ({room, index, setAllRooms}) => {
    const { img, roomId, price, name } = room;

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
            const url = `http://localhost:5000/api/v1/products/rooms/${roomId}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
            swal("The Room is Deleted", {
              icon: "success",
            });
    
            //this second fetched is use to refresh delete data 
            fetch("http://localhost:5000/api/v1/orders/room-orders").then(res => res.json()).then(data => setAllRooms(data?.data))
          } else {
            swal("Oder not deleted. You canceled it!");
          }
        });
      };
  return (
    <tr>
    <th>{index + 1}</th>
    <td>
      <img className="w-28 h-20 rounded " src={img} alt="" />
    </td>
    <td>{roomId}</td>
    <td>{name}</td>
    <td>{price}TK</td>
    <td>
      <button
        onClick={() => {
          handleDeleteOrder(roomId);
        }}
        className="btn btn-error btn-sm btn-outline hover:text-base-200"
      >
        Delete Room
      </button>
      <button className='btn btn-success btn-sm btn-outline ml-2'>Update Room</button>
    </td>
  </tr>
  )
}

export default AllRoomsTable;