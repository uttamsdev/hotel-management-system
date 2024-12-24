import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "sonner";
import { FaAirFreshener, FaUtensils, FaTv, FaWifi, FaClock } from 'react-icons/fa';


const BookRoomPage= () => {
  const [user] = useAuthState(auth);
  const [searchData, setSearchData] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(false);

  const startDate = searchData?.startDate ? new Date(searchData.startDate) : null;
  const endDate = searchData?.endDate ? new Date(searchData.endDate) : null;

  const daysDifference = startDate && endDate
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    : 0;

  const handleBookRoom = async () => {
    if (!roomData || !searchData || !user) return;

    const order = {
      roomId: roomData.roomId,
      email: user.email,
      name: roomData.name,
      startDate: searchData.startDate,
      endDate: searchData.endDate,
      price: daysDifference * roomData.price,
      img: roomData.img,
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
          description: "Your room booking is successful. Check mail for details.",
        });
      }
      navigate("/user/my-orders");
    } catch (error) {
      console.error(error);
      toast.error("Booking failed", {
        description: "There was an error while booking your room. Please try again.",
      });
    } finally {
      setBooking(false);
    }
  };

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const res = await fetch(
          `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${roomId}`
        );
        const data = await res.json();
        setRoomData(data.data[0]);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [roomId]);

  useEffect(() => {
    const storedSearchData = localStorage.getItem("search");
    if (storedSearchData) {
      setSearchData(JSON.parse(storedSearchData));
    }
  }, []);

  if (!roomData) {
    return <div className="flex justify-center items-center h-screen">
      <ImSpinner3 className="animate-spin text-4xl text-blue-600" />
    </div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 h-[calc(100vh_-_115px)]">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <img
            className="w-full h-[300px] lg:h-[400px] object-cover rounded shadow-lg"
            src={roomData.img}
            alt={roomData.name}
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <RoomFeature title="Size" value="400 Sq-ft" />
            <RoomFeature title="Capacity" value="02 Adult & 02 Childs (below 10 Years)" />
            <RoomFeature title="Bed" value="Double" />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Room Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <RoomService icon={<FaAirFreshener />} text="Air Conditioning" />
              <RoomService icon={<FaUtensils />} text="Restaurant Quality" />
              <RoomService icon={<FaTv />} text="Cable TV" />
              <RoomService icon={<FaWifi />} text="Unlimited Wifi" />
              <RoomService icon={<FaClock />} text="Service 24/7" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800 border-b pb-2">Order Summary</h2>
            <SummaryItem label="Room ID" value={roomData.roomId} />
            <SummaryItem label="Room Name" value={roomData.name} />
            <SummaryItem label="Price" value={`${roomData.price} BDT/day`} />
            <SummaryItem label="Check In Date" value={searchData?.startDate || 'N/A'} />
            <SummaryItem label="Check Out Date" value={searchData?.endDate || 'N/A'} />
            <SummaryItem label="Total Person" value={searchData?.person?.toString() || '1'} />
            <SummaryItem label="Total Price" value={`${daysDifference * roomData.price} BDT`} isTotal />
            <button
              onClick={handleBookRoom}
              disabled={booking}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium mt-6 hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
            >
              {booking ? (
                <>
                  <ImSpinner3 className="animate-spin mr-2" />
                  Confirming...
                </>
              ) : (
                'Confirm Order'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomFeature = ({ title, value }) => (
  <div className="bg-state-500 p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);

const RoomService = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="text-blue-500 text-xl">{icon}</div>
    <p className="text-gray-700">{text}</p>
  </div>
);

const SummaryItem = ({ label, value, isTotal }) => (
  <div className={`flex justify-between items-center mb-2 ${isTotal ? 'font-semibold text-lg' : ''}`}>
    <span className="text-gray-600">{label}:</span>
    <span className={isTotal ? 'text-blue-600' : 'text-gray-800'}>{value}</span>
  </div>
);

export default BookRoomPage;

