import React from "react";
import swal from "sweetalert";

const ViewOrderTable = ({ order, index, setAllOrderData }) => {
  const { img, roomId, email, startDate, endDate, price } = order;

  const handleDeleteOrder = async (roomId) => {
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const url = `https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/orders/delete-room-order/${roomId}`;
        await fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        swal("The order is Deleted", {
          icon: "success",
        });

        //this second fetched is use to refresh delete data
        await fetch(
          "https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/orders/room-orders"
        )
          .then((res) => res.json())
          .then((data) => setAllOrderData(data?.data));
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
      <td>{email}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{price}TK</td>
      <td>
        <button
          onClick={() => {
            handleDeleteOrder(roomId);
          }}
          className="btn btn-error text-base-200 btn-sm btn-outline"
        >
          Delete Order
        </button>
      </td>
    </tr>
  );
};

export default ViewOrderTable;
