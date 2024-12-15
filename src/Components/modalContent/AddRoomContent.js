import React, { useEffect, useState } from "react";
import BtnPrimary from "../utils/BtnPrimary";
import { handleSubmit, uploadImage } from "../lib/uploadImage";
import { toast } from "sonner";
import { ImageUploader } from "../utils/ImageUploader";
import { FiEdit } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const AddRoomContent = ({ refetch, editData, setOpen, btnText }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    roomId: "",
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    let url;
    let img;
    let imageUp;
    setIsLoading(true);
    try {
      const image = document.querySelector("#img"); // taking image from input
      const formData = new FormData();
      formData.append("image", image.files[0]);

      if (image?.files?.length) {
        imageUp = await uploadImage(formData);
      }
      if (imageUp?.success) {
        img = imageUp.data.url;
      }
      if (editData) {
        url = `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${editData?.roomId}`;
      } else {
        url = `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/add-room`;
      }

      const postData = {
        ...data,
        img,
      };

      const post = await handleSubmit({
        url,
        postData,
        method: editData ? "PUT" : "POST",
      });
      console.log("post result", post);
      if (post?.success) {
        toast.success(post?.message);
        refetch();
      } else if (!post?.success) {
        toast.error(post?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
    // console.log("ix", imageUp);
  };

  useEffect(() => {
    if (editData) {
      setData({
        roomId: editData.roomId,
        price: editData.price,
        img: editData.price,
        name: editData.name,
      });
    }
  }, [editData]);
  console.log("data", data);
  return (
    <div className="w-full">
      <form
        className="w-full flex flex-col gap-2.5 text-gray-800"
        onSubmit={handleAdd}
      >
        <div className="">
          <p>Room ID: </p>
          <input
            onChange={handleChange}
            type="number"
            className=""
            placeholder="Enter room id"
            name="roomId"
            defaultValue={editData?.roomId}
          />
        </div>
        <div className="">
          <div>
            <p>Room Name: </p>
            <input
              onChange={handleChange}
              type="text"
              className="w-full"
              placeholder="Enter room name"
              name="name"
              defaultValue={editData?.name}
            />
          </div>
        </div>
        <div className="">
          <div>
            <p>Room Price: </p>
            <input
              onChange={handleChange}
              className=""
              type="number"
              placeholder="Enter room price"
              name="price"
              defaultValue={editData?.price}
            />
          </div>
        </div>
        <div className="w-full">
          <ImageUploader existingImageUrl={editData?.img} selector={"img"} />
        </div>

        <div className="flex justify-end">
          <BtnPrimary
            icon={
              editData ? (
                <FiEdit style={{ fontSize: "16px" }} />
              ) : (
                <IoMdAdd style={{ fontSize: "16px" }} />
              )
            }
            isLoading={isLoading}
            customClass={"px-5 mt-2 gap-1"}
          >
            {btnText}
          </BtnPrimary>
        </div>
      </form>
    </div>
  );
};

export default AddRoomContent;
