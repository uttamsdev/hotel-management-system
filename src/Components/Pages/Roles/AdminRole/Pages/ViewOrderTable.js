import React, { useState } from "react";
import swal from "sweetalert";
import { DeleteIcon } from "../../../../assets/icons";
import DefaultModal from "../../../../utils/Modal";
import DeleteMsg from "../../../../modalContent/deleteModalContent";

const ViewOrderTable = ({ order, index, setAllOrderData }) => {
  const { img, roomId, orderId, email, startDate, endDate, price } = order;
  const [open, setOpen] = useState(false);
  const handleDeleteOrder = async (orderId) => {
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const url = `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/delete-room-order/${orderId}`;
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
          "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/room-orders"
        )
          .then((res) => res.json())
          .then((data) => setAllOrderData(data?.data));
      } else {
        swal("Oder not deleted. You canceled it!");
      }
    });
  };

  const handleDelete = (id) => {
    setOpen(true);
  };

  return (
    <>
      <tr className="hover">
        {/* <th>{index + 1}</th> */}
        <td>
          <img className="w-20 h-12 rounded " src={img} alt="" />
        </td>
        <td>{roomId}</td>
        <td>{orderId}</td>
        <td>{email}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>{price}TK</td>
        <td className="">
          <button
            onClick={() => {
              // handleDeleteOrder(orderId);
              handleDelete(order)
            }}
            className="bg-red-500 flex justify-center p-1 rounded mx-auto"
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
      <DefaultModal width={430} header={false} open={open} setOpen={setOpen} modalContent={<DeleteMsg setOpen={setOpen}/>}/>
    </>
  );
};

export default ViewOrderTable;
