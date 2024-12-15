/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "../../../../assets/icons";
import DeleteModal from "../../../../utils/DeleteModal";

const AllRoomsTable = ({ room, handleEditRoom , refetch}) => {
  const { img, roomId, price, name } = room;
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <tr>
      <td className="w-[160px] !pl-3">
        <img className="w-20 h-12 rounded" src={img} alt="" />
      </td>
      <td>{roomId}</td>
      <td>{name}</td>
      <td>{price}TK</td>
      <td>
        <div className="flex items-center gap-2.5 justify-center">
          <button
            onClick={() => {
              // handleDeleteOrder(orderId);
              setUrl(
                `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${roomId}`
              );
              setOpen(true);
            }}
            className="bg-red-500 flex justify-center p-1 rounded "
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => {
              handleEditRoom(room);
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

export default AllRoomsTable;
