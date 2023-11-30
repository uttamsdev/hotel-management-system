import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai';
import swal from 'sweetalert';
import { BiSolidHomeSmile } from "react-icons/bi";


const AddRoom = () => {
  const imageStorageKey = "52a7c30a95d000395b196c985adb3c83";

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const roomId = event.target.roomId.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const image = document.querySelector("#img"); // taking image from input
    const formData = new FormData();
    formData.append("image", image.files[0]);
    // formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.url; // hosted image link;
          const product = {
            roomId: roomId,
            name: name,
            price: price,
            img: img,
          };

          //send docotr info to my database
          fetch("http://localhost:5000/api/v1/products/add-room", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.data?.roomId) {
                swal(
                  "Room Successfully Added!",
                  "Room Successfully added to Database",
                  "success"
                );
                event.target.reset(); //clear form
              } else {
                alert("Failed to add");
              }
              // console.log("product", inserted);
            });
        }

        console.log("iMG BB RESULT", data);
      });
    // console.log(data);
    //
  };
  return (
    <div className='bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height'>
      <p className=' border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center'><BiSolidHomeSmile className='ml-5 mr-3 w-6 h-6'/>Add New Room</p>
       <div>
      <h2 className="text-center text-3xl font-bold m-8 text-blue-500 underline">
        Add new Room
      </h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleAddProduct}
          className="shadow-2xl pl-12 pr-12 pt-6 pb-6 mt-4 mb-12 w-11/12 xl:w-[600px]"
        >
          <label htmlFor="productName">Room ID:</label> <br />
          <input
            type="number"
            name="roomId"
            placeholder="Enter Room ID"
            className="input input-bordered w-full max-w-lg mb-3"
          />
          <br />
          <label htmlFor="price">Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="Enter Room Name"
            className="input input-bordered w-full max-w-lg mb-3"
          />
          <br />
          <label htmlFor="minOrder">Price: </label> <br />
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered w-full max-w-lg mb-3"
          />
          <br />
          <label htmlFor="image">Upload Image:</label> <br />
          <input
            className="input w-full max-w-xs mb-3"
            name="img"
            id="img"
            type="file"
          />{" "}
          <br />
          <input
            className="btn btn-primary text-white w-48 block mx-auto"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
    </div>
  )
}

export default AddRoom;