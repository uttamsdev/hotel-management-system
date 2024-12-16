import React, { useEffect, useState } from "react";
import DeleteModal from "../../../../utils/DeleteModal";
import { DeleteIcon } from "../../../../assets/icons";

const FoodOrdersTable = ({ order, index, refetch }) => {
  const { img, foodId, orderId, name, price, email } = order;
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <tr>
      <td>
        <img className="w-20 h-[45px] rounded " src={img} alt="" />
      </td>
      <td>{foodId}</td>
      <td>{orderId}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{price}TK</td>
      <td>
        <button
          onClick={() => {
            setUrl(
              `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/order-food/${orderId}`
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

export default FoodOrdersTable;
