import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../../Context/Context";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import swal from "sweetalert";


const BookRoomPage = () => {
  const [user] = useAuthState(auth);
  const [roomData, setRoomData] = useState({});
  const { searchRoomData } = useContext(MyContext);
  const { roomId } = useParams();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  console.log("roomData: ", roomData);

  const startDate = new Date(searchRoomData?.startDate);
  const endDate = new Date(searchRoomData?.endDate);

  // Calculate the difference in milliseconds
  const timeDifference = endDate - startDate;

  // Calculate the number of days
  let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


  if(daysDifference===0){
    daysDifference = 1;
  }

  const handleBookRoom = async()=> {
    const order = {
      roomId: roomData?.roomId,
      email: user?.email,
      name: roomData?.name,
      startDate: searchRoomData?.startDate,
      endDate: searchRoomData?.endDate,
      price: daysDifference * roomData?.price,
      img: roomData?.img
    }

    fetch("http://localhost:5000/api/v1/orders/order-room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Room Booking Successful",
          text: "Check your email for confirmation!",
          icon: "success",
          button: "Ok",
        });
        // event.target.reset();
        navigate("/user/my-orders")
  });
  }
  console.log("day: ",startDate)
  console.log("end:",endDate)

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/rooms/${roomId}`)
      .then((res) => res.json())
      .then((data) => setRoomData(data.data[0]));
  }, [roomId]);
  return (
    <div className="w-11/12 xl:w-[1100px] mx-auto mt-4 flex flex-col xl:flex-row">
      <div>
        <div className="mb-6">
          <img className="w-11/12 mx-auto h-[200px] xl:w-[710px] xl:h-[430px] rounded" src={roomData?.img} alt="" />
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
              <p className="text-md xl:text-xl font-bold text-white">Capacity:</p>
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
      <div className="w-11/12 mx-auto xl:w-[350px] h-[400px] bg-[#E3E3ED] p-4 rounded-md">
          <div className="mt-4">

            <p className="text-2xl font-bold text-center mb-2 text-blue-500">Order Summary</p>
            <p className="text-xl mb-2 text">RoomID: <span className="text-black italic border-2 border-cyan-50 ">{roomData?.roomId}</span></p>
            <p className="text-xl mb-2"><span className="text-black italic border-2 border-cyan-50 ">{roomData?.name}</span></p>
            <p className="text-xl mb-2">Price: <span className="text-black italic border-2 border-cyan-50 ">{roomData?.price} BDT/day</span></p>
            <p className="text-xl mb-2">Check In Date: <span className="text-black italic border-2 border-cyan-50 ">{searchRoomData?.startDate}</span></p>
            <p className="text-xl mb-2">Check Out Date: <span className="text-black italic border-2 border-cyan-50">{searchRoomData?.endDate}</span></p>
            <p className="text-xl mb-2">Total Person: <span className="text-black italic border-2 border-cyan-50">{searchRoomData?.person || 1}</span></p>
            <p className="text-xl mb-2">Total Price: <span className="text-black italic border-2 border-cyan-50 ">{daysDifference * roomData?.price} BDT</span></p>
          </div>
          <div>
            <button onClick={handleBookRoom} className="w-full h-10 rounded font-bold bg-blue-600 text-white mt-4">Confirm Order</button>
          </div>
        </div>
    </div>
  );
};

export default BookRoomPage;
