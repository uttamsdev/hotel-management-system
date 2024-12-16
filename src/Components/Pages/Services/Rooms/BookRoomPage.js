import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "sonner";

const BookRoomPage = () => {
  const [user] = useAuthState(auth);
  const [searchData, setSearchData] = useState(null);
  const [roomData, setRoomData] = useState({});
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(false);
  // const [loading, setLoading] = useState(false);
  console.log("roomData: ", roomData);

  const startDate = new Date(searchData?.startDate);
  const endDate = new Date(searchData?.endDate);

  // Calculate the difference in milliseconds
  const timeDifference = endDate - startDate;

  // Calculate the number of days
  let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  //! order confirm hole search result localstorage clear korbo search,rooms

  const handleBookRoom = async () => {
    const order = {
      roomId: roomData?.roomId,
      email: user?.email,
      name: roomData?.name,
      startDate: searchData?.startDate,
      endDate: searchData?.endDate,
      price: daysDifference * roomData?.price,
      img: roomData?.img,
    };

    try {
      setBooking(true);
      const res = await fetch(
        "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/orders/order-room",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      const result = await res.json();
      if (Object.keys(result).length) {
        toast.success("Room booking successful", {
          description:
            "Your room booking is successful. Check mail for details.",
        });
      }
      navigate("/user/my-orders");
      console.log(`rx`, result);
    } catch (error) {
      console.log(error);
    } finally {
      setBooking(false);
      localStorage.clear();
    }
  };

  useEffect(() => {
    fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${roomId}`
    )
      .then((res) => res.json())
      .then((data) => setRoomData(data.data[0]));
  }, [roomId]);

  useEffect(() => {
    setSearchData(JSON.parse(localStorage.getItem("search")));
  }, []);
  return (
    <div className="w-11/12 xl:w-[1100px] mx-auto mt-4 flex flex-col xl:flex-row xl:items-start">
      <div>
        <div className="mb-6">
          <img
            className="w-11/12 mx-auto h-[200px] xl:w-[710px] xl:h-[430px] rounded"
            src={roomData?.img}
            alt=""
          />
        </div>

        <div className="flex ml-2">
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center mr-[1px]">
            <div className="text-center">
              <p className="text-md xl:text-xl font-bold text-white">Size:</p>
              <p className="text-md xl:text-xl text-[#EDDFBA]">400 Sq-ft</p>
            </div>
          </div>
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center mr-[1px]">
            <div className="text-center">
              <p className="text-md xl:text-xl font-bold text-white">
                Capacity:
              </p>
              <p className="text-md xl:text-xl text-[#EDDFBA]">
                02 Adult & 02 Childs (below 10 Years)
              </p>
            </div>
          </div>
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center">
            <div className="text-center">
              <p className="text-md xl:text-xl font-bold text-white">Bed:</p>
              <p className="text-md xl:text-xl text-[#EDDFBA]">Double</p>
            </div>
          </div>
        </div>

        <div className="w-11/12 xl:w-[730px] mb-6 xl:mb-0">
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-4 mt-4">
              Room Services
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="http://www.hotels.gov.bd/forntend/img/core-img/icon1.png"
                  alt=""
                />
              </div>
              <p>Air Conditioning</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="http://www.hotels.gov.bd/forntend/img/core-img/icon3.png"
                  alt=""
                />
              </div>
              <p> Restaurant quality </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="http://www.hotels.gov.bd/forntend/img/core-img/icon4.png"
                  alt=""
                />
              </div>
              <p>Cable TV</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="http://www.hotels.gov.bd/forntend/img/core-img/icon5.png"
                  alt=""
                />
              </div>
              <p>Unlimited Wifi</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="http://www.hotels.gov.bd/forntend/img/core-img/icon6.png"
                  alt=""
                />
              </div>
              <p>Service 24/7</p>
            </div>
          </div>
        </div>
      </div>
      {/* another div */}
      <div className="w-11/12 mx-auto xl:w-[350px] h-auto bg-[#E3E3ED]  rounded-md p-3 pb-4">
        <div className="">
          <p className="text-xl font-medium text-center mb-2 text-[#000080] pb-0.5 border-b border-[#000080]">
            Order Summary
          </p>
          <p className="text-lg font-medium mb-2 text">
            RoomID:
            <span className="text-gray-700 font-normal underline italic ">
              {roomData?.roomId}
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Room Name:
            <span className="text-gray-700 font-normal underline italic ">
              {roomData?.name}
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Price:{" "}
            <span className="text-gray-700 font-normal underline italic ">
              {roomData?.price} BDT/day
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Check In Date:{" "}
            <span className="text-gray-700 font-normal underline italic ">
              {searchData?.startDate}
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Check Out Date:{" "}
            <span className="text-gray-700 font-normal underline italic">
              {searchData?.endDate}
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Total Person:{" "}
            <span className="text-gray-700 font-normal underline italic">
              {searchData?.person || 1}
            </span>
          </p>
          <p className="text-lg font-medium mb-2">
            Total Price:{" "}
            <span className="text-gray-700 font-normal underline italic ">
              {daysDifference * roomData?.price} BDT
            </span>
          </p>
        </div>
        <div>
          <button
            onClick={handleBookRoom}
            className="w-full h-10 rounded font-medium flex items-center gap-1 justify-center bg-[#000080]/90 text-white mt-4"
          >
            {booking && (
              <ImSpinner3
                className="animate-spin"
                style={{ fontSize: "18px" }}
              />
            )}
            {booking ? "Confirming.." : "Confirm Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRoomPage;
