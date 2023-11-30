/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import swal from "sweetalert";

const AllRoomsTable = ({ room, index, setAllRooms }) => {
  const { img, roomId, price, name } = room;

  //   const handleGetUpdate = async()=> {
  //    ;

  //   }
  const handleButtonClick = () => {
    // Perform any additional actions before or instead of form submission
    console.log('Button clicked');
  };
  const handleUpdateRoom = async (event) => {
    // event.preventDefault();
    const rId = event.target.roomId.value;
    const rName = event.target.name.value;
    const rPrice = event.target.price.value;

    if(!rId || !rName || !rPrice){
        return;
    }
    const updateData = {
      roomId: rId,
      name: rName,
      price: rPrice,
    };

    await fetch(`http://localhost:5000/api/v1/products/rooms/${roomId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Room Updated Successful!",
          text: "Updated room successfully!",
          icon: "success",
          button: "Ok",
        });
      });

      //this api is called for refresh updated
      fetch("http://localhost:5000/api/v1/products/rooms")
      .then((res) => res.json())
      .then((data) => setAllRooms(data?.data));
  };

  const handleDeleteOrder = async (roomId) => {
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async(willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/api/v1/products/rooms/${roomId}`;
        await fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        swal("The Room is Deleted", {
          icon: "success",
        });

        //this second fetched is use to refresh delete data
        await fetch("http://localhost:5000/api/v1/products/rooms")
          .then((res) => res.json())
          .then((data) => setAllRooms(data?.data));
      } else {
        swal("Oder not deleted. You canceled it!");
      }
    });
  };

  //   useEffect(()=>{
  //     fetch(`http://localhost:5000/api/v1/products/rooms/`).then(res => res.json()).then(data => setAllRooms(data?.data))
  //   },[setAllRooms])
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
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-success btn-sm btn-outline ml-2"
        >
          Update Room
        </button>
      </td>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-full mx-auto">
          <p className="text-2xl font-bold text-center">
            Update Room Information
          </p>
          <form method="dialog" onSubmit={handleUpdateRoom}>
            <button onClick={handleButtonClick} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Room ID: </p>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  name="roomId"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Room Name: </p>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Room Price: </p>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="number"
                  name="price"
                />
              </div>
            </div>

            <div className="w-full flex justify-center mt-4">
              <input
                className="btn btn-success text-white"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </dialog>
    </tr>
  );
};

export default AllRoomsTable;
