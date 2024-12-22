import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import { ImSpinner3 } from "react-icons/im";
import {
  FaBed,
  FaUsers,
  FaRulerCombined,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import {
  MdAir,
  MdRestaurant,
  MdTv,
  MdWifi,
  MdSupportAgent,
} from "react-icons/md";

const SingleRoomDetails = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState({
    img: "",
    name: "",
    description: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("1");
  const navigate = useNavigate();

  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = endDate.toISOString().split("T")[0];
  const [checking, setChecking] = useState(false);
  const [booking, setBooking] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkRoomIsAvailable = async () => {
    const date = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      roomId: roomId,
    };

    const res = await fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/search-single-available-rooms?${new URLSearchParams(
        date
      ).toString()}`
    );

    const result = await res.json();
    return result;
  };

  const handleCheckAvailableRoom = async () => {
    setChecking(true);
    const isAvailable = await checkRoomIsAvailable();
    if (!isAvailable?.data?.length) {
      toast.success(`Congratulations, room is available`, {
        description: `This room is available from ${formattedStartDate} to ${formattedEndDate}`,
        duration: 6000,
      });
    } else {
      toast.error("Room is not available", {
        description: `Sorry! This room is not available from ${formattedStartDate} to ${formattedEndDate}`,
        duration: 6000,
      });
    }
    setChecking(false);
  };

  const handleBookRoom = async () => {
    setBooking(true);
    const isAvailable = await checkRoomIsAvailable();
    if (isAvailable?.data?.length) {
      toast.error("Room is not available", {
        description: `Sorry! This room is not available from ${formattedStartDate} to ${formattedEndDate}`,
        duration: 6000,
      });
      setBooking(false);
      return;
    }

    localStorage.setItem(
      "search",
      JSON.stringify({
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        person: inputValue,
      })
    );

    setBooking(false);
    navigate(
      `/book-room/${roomId}?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
    );
  };

  useEffect(() => {
    fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/rooms/${roomId}`
    )
      .then((res) => res.json())
      .then((data) => setRoomData(data.data[0]));
  }, [roomId]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[calc(100vh_-_115px)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            className="w-full h-96 object-cover rounded shadow-lg mb-8"
            src={roomData?.img}
            alt={roomData?.name}
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {roomData?.name}
          </h1>
          <p className="text-gray-600 mb-8">{roomData?.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-center mb-2">
                <FaRulerCombined className="text-3xl text-blue-500" />
              </div>
              <p className="text-center font-semibold">Size</p>
              <p className="text-center text-gray-600">400 Sq-ft</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-center mb-2">
                <FaUsers className="text-3xl text-blue-500" />
              </div>
              <p className="text-center font-semibold">Capacity</p>
              <p className="text-center text-gray-600">
                02 Adults & 02 Children
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-center mb-2">
                <FaBed className="text-3xl text-blue-500" />
              </div>
              <p className="text-center font-semibold">Bed</p>
              <p className="text-center text-gray-600">Double</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Room Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <MdAir className="text-3xl text-blue-500 mb-2" />
              <p className="text-center text-sm">Air Conditioning</p>
            </div>
            <div className="flex flex-col items-center">
              <MdRestaurant className="text-3xl text-blue-500 mb-2" />
              <p className="text-center text-sm">Restaurant Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <MdTv className="text-3xl text-blue-500 mb-2" />
              <p className="text-center text-sm">Cable TV</p>
            </div>
            <div className="flex flex-col items-center">
              <MdWifi className="text-3xl text-blue-500 mb-2" />
              <p className="text-center text-sm">Unlimited Wifi</p>
            </div>
            <div className="flex flex-col items-center">
              <MdSupportAgent className="text-3xl text-blue-500 mb-2" />
              <p className="text-center text-sm">Service 24/7</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-700 to-blue-700 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 space-y-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Check Availability
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-1">
                    Check In - Check Out
                  </label>
                  <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg">
                    {/* <FaCalendarAlt className="text-blue-200 mr-2" /> */}
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      className="bg-transparent w-full focus:outline-none text-white placeholder-blue-200"
                      placeholderText="Start date"
                      dateFormat="MM/dd/yyyy"
                      wrapperClassName="w-full"
                      calendarClassName="bg-white text-gray-800"
                    />
                    <span className="mx-2 text-blue-200">-</span>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      className="bg-transparent w-full focus:outline-none text-white placeholder-blue-200"
                      placeholderText="End date"
                      dateFormat="MM/dd/yyyy"
                      wrapperClassName="w-full"
                      calendarClassName="bg-white text-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-1">
                    Guests
                  </label>
                  <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg">
                    <FaUserFriends className="text-blue-200 mr-2" />
                    <select
                      value={inputValue}
                      onChange={handleInputChange}
                      className="bg-transparent w-full focus:outline-none text-white appearance-none"
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="1" className="text-gray-800">
                        1 Guest
                      </option>
                      <option value="2" className="text-gray-800">
                        2 Guests
                      </option>
                      <option value="3" className="text-gray-800">
                        3 Guests
                      </option>
                      <option value="4" className="text-gray-800">
                        4 Guests
                      </option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleCheckAvailableRoom}
                  className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                  disabled={checking}
                >
                  {checking && <ImSpinner3 className="animate-spin mr-2" />}
                  {checking ? "Checking..." : "Check Availability"}
                </button>
                <button
                  onClick={handleBookRoom}
                  className="w-full  bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2.5 rounded-lg transition duration-300 flex items-center justify-center"
                  disabled={booking}
                >
                  {booking && <ImSpinner3 className="animate-spin mr-2" />}
                  {booking ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;
