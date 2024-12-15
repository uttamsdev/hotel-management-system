/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { DeleteIcon, EditIcon } from "../../../../assets/icons";
import DeleteModal from "../../../../utils/DeleteModal";

const AllRoomsTable = ({
  room,
  content,
  title,
  modalOpen,
  setModalOpen,
  refetch,
  handleEditRoom,
}) => {
  const { img, roomId, price, name } = room;
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  //   const handleGetUpdate = async()=> {
  //    ;

  //   }
  // const handleButtonClick = () => {
  //   // Perform any additional actions before or instead of form submission
  //   console.log("Button clicked");
  // };

  // const handleUpdateRoomInfo = (roomId) => {
  //   document.getElementById("my_modal_2").showModal();
  //   localStorage.setItem("roomId", roomId);
  // };
  // const handleUpdateRoom = async (event) => {
  //   // event.preventDefault();
  //   const rId = event.target.roomId.value;
  //   const rName = event.target.name.value;
  //   const rPrice = event.target.price.value;
  //   const image = document.querySelector("#img"); // taking image from input
  //   const formData = new FormData();
  //   formData.append("image", image.files[0]);
  //   const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
  //   await fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data : ", data);
  //       if (data.success) {
  //         imgUp = data.data.url; // hosted image link;
  //       }
  //     });

  //   if (!rId || !rName || !rPrice) {
  //     alert(
  //       "You must enter food id, name and price uploading image is optional"
  //     );
  //     return;
  //   }
  //   const updateData = {
  //     roomId: rId,
  //     name: rName,
  //     price: rPrice,
  //     img: imgUp,
  //   };

  //   await fetch(
  //     `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${localStorage.getItem(
  //       "roomId"
  //     )}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(updateData),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       swal({
  //         title: "Room Updated Successful!",
  //         text: "Updated room successfully!",
  //         icon: "success",
  //         button: "Ok",
  //       });
  //     });

  //   //this api is called for refresh updated
  //   fetch(
  //     "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAllRooms(data?.data));
  //   event.target.reset();
  // };

  // const handleDeleteOrder = async (roomId) => {
  //   // alert(`Clicked on ${roomId}`)
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover this imaginary file!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then(async (willDelete) => {
  //     if (willDelete) {
  //       const url = `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${roomId}`;
  //       await fetch(url, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log(data));
  //       swal("The Room is Deleted", {
  //         icon: "success",
  //       });

  //       //this second fetched is use to refresh delete data
  //       await fetch(
  //         "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => setAllRooms(data?.data));
  //     } else {
  //       swal("Oder not deleted. You canceled it!");
  //     }
  //   });
  // };

  //   useEffect(()=>{
  //     fetch(`https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/`).then(res => res.json()).then(data => setAllRooms(data?.data))
  //   },[setAllRooms])
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
      {/* <DeleteModal setOpen={setOpen} open={open} url={url} refetch={refetch} /> */}
    </tr>
  );
};

export default AllRoomsTable;
