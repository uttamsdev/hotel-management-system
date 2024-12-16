import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "sonner";
import { ImSpinner3 } from "react-icons/im";

const SingleRoomDetails = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const dateObjectStartDate = new Date(startDate);
  const dateObjectEndDate = new Date(endDate);
  const formattedStartDate = dateObjectStartDate.toISOString().split("T")[0];
  const formattedEndDate = dateObjectEndDate.toISOString().split("T")[0];
  const [checking, setChecking] = useState(false);
  const [booking, setBooking] = useState(false);
  const handleInputChange = (event) => {
    // Update the state with the new input value
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
      toast.success(`Congratulation room available`, {
        description: `This room is available from ${formattedStartDate} to ${formattedEndDate}`,
        duration: 6000,
      });
    } else {
      toast.error("Room is not available", {
        description: `Sorry! this room is not available from ${formattedStartDate} to ${formattedEndDate}`,
        duration: 6000,
      });
    }

    setChecking(false);
  };

  //handle room book:

  const handleBookRoom = async () => {
    setBooking(true);
    const isAvailable = await checkRoomIsAvailable();
    if (isAvailable?.data?.length) {
      toast.error("Room is not available", {
        description: `Sorry! this room is not available from ${formattedStartDate} to ${formattedEndDate}`,
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
        person: inputValue ? inputValue : 1,
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
    <div className="max-w-[1100px] w-full mx-auto mt-4 grid grid-cols-6 place-items-start">
      <div className="mx-auto max-w-[700px] w-full col-span-4">
        <div className="mb-6">
          <img
            className="w-[300px] h-[200px] xl:w-[710px] xl:h-[430px] rounded-md"
            src={roomData?.img}
            alt=""
          />
        </div>

        <div className="flex gap-4 xl:gap-0 xl:ml-2 flex-col justify-center items-center xl:justify-normal xl:flex-row">
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center mr-[1px]">
            <div className="text-center">
              <p className="text-xl font-bold text-white">Size:</p>
              <p className="text-xl text-[#EDDFBA]">400 Sq-ft</p>
            </div>
          </div>
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center mr-[1px]">
            <div className="text-center">
              <p className="text-xl font-bold text-white">Capacity:</p>
              <p className="text-xl text-[#EDDFBA]">
                02 Adult & 02 Childs (below 10 Years)
              </p>
            </div>
          </div>
          <div className="w-[235px] h-[140px] bg-[#414159] flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-bold text-white">Bed:</p>
              <p className="text-xl text-[#EDDFBA]">Double</p>
            </div>
          </div>
        </div>

        <div className="w-full mb-4">
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-4 mt-4">
              Room Services
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
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
      <div className="max-w-[400px] w-full col-span-2 bg-[#E3E3ED] h-auto mx-auto flex-col flex justify-center rounded-md">
        <div className="p-4">
          <div className="mb-2">
            <p className="text-2xl mb-6 text-gray-600 font-bold pt-1 text-center">
              Check Room Availability
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div>
                <p className="text-black">Check In</p>
                <DatePicker
                  className="h-10  text-center outline-none rounded"
                  selected={startDate}
                  minDate={new Date()} // Set minDate to today's date
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <p className="text-black">Check Out</p>
                <DatePicker
                  className="h-10 text-center outline-none rounded "
                  selected={endDate}
                  minDate={new Date()} // Set minDate to today's date
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-black">Persons</p>
              <select
                name=""
                id=""
                className="h-10 w-full bg-white text-center rounded outline-none"
                value={inputValue}
                defaultValue={1}
                onChange={handleInputChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex items-center  w-full gap-2.5">
              <button
                onClick={handleCheckAvailableRoom}
                className="bg-[#000080f1] hover:bg-[#000080]/80 flex gap-1 items-center justify-center text-white h-10 w-[200px] mt-2 p-2 rounded-full"
              >
                {checking && (
                  <ImSpinner3
                    className="animate-spin"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {checking ? "Checking" : "Check Availability"}
              </button>
              <button
                onClick={handleBookRoom}
                className="bg-[#000080f1] flex items-center gap-1 justify-center hover:bg-[#000080]/80 text-white h-10 w-[200px] mt-2 p-2 rounded-full"
              >
                {booking && (
                  <ImSpinner3
                    className="animate-spin"
                    style={{ fontSize: "18px" }}
                  />
                )}
                {booking ? "Booking..." : "Book room"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;
