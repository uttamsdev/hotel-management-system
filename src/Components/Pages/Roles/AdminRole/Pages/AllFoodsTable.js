/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "../../../../assets/icons";
import DeleteModal from "../../../../utils/DeleteModal";

const AllFoodsTable = ({ food, handleEditFood, refetch }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const { img, foodId, price, name } = food;

  return (
    <tr>
      <td>
        <img className="w-20 h-[45px] rounded " src={img} alt="" />
      </td>
      <td>{foodId}</td>
      <td>{name}</td>
      <td>{price}TK</td>
      <td className="">
        <div className="flex items-center gap-2.5 justify-center">
          <button
            onClick={() => {
              // handleDeleteOrder(orderId);
              setUrl(
                `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/${foodId}`
              );
              setOpen(true);
            }}
            className="bg-red-500 flex justify-center p-1 rounded "
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => {
              handleEditFood(food);
            }}
            className="bg-blue-500 flex justify-center p-1 rounded"
          >
            <EditIcon />
          </button>
        </div>
      </td>
      <DeleteModal setOpen={setOpen} open={open} url={url} refetch={refetch} />
    </tr>
  );
};

export default AllFoodsTable;
