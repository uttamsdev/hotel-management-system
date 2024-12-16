import React, { useEffect, useState } from "react";
import { DeleteIcon } from "../../../../assets/icons";
import DeleteModal from "../../../../utils/DeleteModal";

const GetOrders = ({ order, refetch}) => {
  const { img, roomId, orderId, name, startDate, endDate, price } = order;
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <tr>
      <td>
        <img className="w-20 h-[45px] rounded " src={img} alt="" />
      </td>
      <td>{roomId}</td>
      <td>{orderId}</td>
      <td>{name}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{price}TK</td>
      <td>
        <button
          onClick={() => {
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
      <DeleteModal setOpen={setOpen} open={open} url={url} refetch={refetch} />
    </tr>
  );
};

export default GetOrders;
