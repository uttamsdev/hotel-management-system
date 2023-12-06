/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import swal from "sweetalert";

const AllFoodsTable = ({ food, index, setAllFoods }) => {
  const imageStorageKey = "52a7c30a95d000395b196c985adb3c83";
  const { img, foodId, price, name } = food;
  const [foodIdStore, setFoodIdStore] = useState();
  let imgUp;

  //   const handleGetUpdate = async()=> {
  //    ;

  //   }
  // const handleButtonClick = () => {
  //   // Perform any additional actions before or instead of form submission
  //   console.log('Button clicked');
  // };

  const handleUpdateFoods = async (foodId) => {
    document.getElementById("my_modal_2").showModal();
    localStorage.setItem("foodId", foodId);
  };
  const handleUpdateFood = async (event) => {
    // event.preventDefault();
    const fName = event.target.name.value;
    const fId = event.target.foodId.value;
    const fPrice = event.target.price.value;
    const image = document.querySelector("#img"); // taking image from input
    const formData = new FormData();
    formData.append("image", image.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data : ",data)
        if (data.success) {
          imgUp = data.data.url; // hosted image link;
         
      }
    })
    // console.log(fId, fName, fPrice);

    if (!fId || !fName || !fPrice) {
      alert("You must enter food id, name and price uploading image is optional");
      return;
    }
    const updateData = {
      foodId: fId,
      name: fName,
      price: fPrice,
      img: imgUp
    };
    await fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/${localStorage.getItem(
        "foodId"
      )}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Food Updated Successful!",
          text: "Updated Food successfully!",
          icon: "success",
          button: "Ok",
        });
      });

    //this api is called for refresh updated
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
    )
      .then((res) => res.json())
      .then((data) => setAllFoods(data?.data));
    event.target.reset();
  };

  const handleDeleteOrder = async (foodId) => {
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const url = `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/${foodId}`;
        await fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        swal("The Food is Deleted", {
          icon: "success",
        });

        //this second fetched is use to refresh delete data
        await fetch(
          "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
        )
          .then((res) => res.json())
          .then((data) => setAllFoods(data?.data));
      } else {
        swal("Oder not deleted. You canceled it!");
      }
    });
  };

  //   useEffect(()=>{
  //     fetch(`https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/`).then(res => res.json()).then(data => setAllRooms(data?.data))
  //   },[setAllRooms])
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-10 xl:w-32 xl:h-20 rounded " src={img} alt="" />
      </td>
      <td>{foodId}</td>
      <td>{name}</td>
      <td>{price}TK</td>
      <td className="">
        <button
          onClick={() => {
            handleDeleteOrder(foodId);
          }}
          className="btn btn-error btn-sm btn-outline hover:text-base-200"
        >
          Delete Food
        </button>
        <button
          onClick={() => handleUpdateFoods(foodId)}
          className="btn btn-success btn-sm btn-outline ml-2"
        >
          Update Food
        </button>
      </td>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-full mx-auto">
          <p className="text-2xl font-bold text-center">
            Update Food Information
          </p>
          <form method="dialog" onSubmit={handleUpdateFood}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Food Id: </p>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  name="foodId"
                  placeholder="Enter food id"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Food Name: </p>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  placeholder="Enter food name"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-4">
              <div>
                <p>Food Price: </p>
                <input
                  className="input input-bordered w-full max-w-md"
                  type="number"
                  name="price"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-4 w-[250px] mx-auto">
              <div>
                <p>Update Image </p>
                <input
                  className="input input-bordered w-full max-w-sm outline-none border-none"
                  name="img"
                  id="img"
                  type="file"
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

export default AllFoodsTable;
