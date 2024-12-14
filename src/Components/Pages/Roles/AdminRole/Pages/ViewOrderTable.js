import React, { useState } from "react";
import { DeleteIcon } from "../../../../assets/icons";
import DeleteModal from "../../../../utils/DeleteModal";

const ViewOrderTable = ({ order, index, setAllOrderData, refetch }) => {
  const { img, roomId, orderId, email, startDate, endDate, price } = order;
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

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
              setUrl(
                `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/delete-room-order/${orderId}`
              );
              setOpen(true);
            }}
            className="bg-red-500 flex justify-center p-1 rounded mx-auto"
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
      <DeleteModal setOpen={setOpen} open={open} url={url} refetch={refetch} />
    </>
  );
};

export default ViewOrderTable;
