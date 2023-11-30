import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

const SingleRoomDetails = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const dateObjectStartDate = new Date(startDate);
  const dateObjectEndDate = new Date(endDate);
  const formattedStartDate = dateObjectStartDate.toISOString().split("T")[0];
  const formattedEndDate = dateObjectEndDate.toISOString().split("T")[0];
  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };
  const handleCheckAvailableRoom = async () => {
    const date = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      roomId: roomId
    };

    // //searched data store
    // const searchData = {
    //   startDate: formattedStartDate,
    //   endDate: formattedEndDate,
    //   person: inputValue,
    // };

    // setSearchRoomData(searchData);

    console.log(date);

    await fetch(
      `http://localhost:5000/api/v1/products/search-single-available-rooms?${new URLSearchParams(
        date
      ).toString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // setAvailableRooms(data)
          console.log("ax:", data?.data);
          if (data?.data.length) {
            swal({
              title: "Opps! Room is Not Available",
              text: `This room is not available for the selected data: ${formattedStartDate} to ${formattedEndDate}`,
              icon: "error",
              button: "Ok",
            });
          } else {
            swal({
              title: "Congratulations! Room Available",
              text: `This room is available for the selected data: ${formattedStartDate} to ${formattedEndDate}`,
              icon: "success",
              button: "Ok",
            });
          }
        }
        console.log("data: ", data);
      });

    // navigate("/available-rooms")
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/rooms/${roomId}`)
      .then((res) => res.json())
      .then((data) => setRoomData(data.data[0]));
  }, [roomId]);
  return (
    <div className="w-full xl:w-[1100px] mx-auto mt-6 flex">
      <div className="mx-auto">
        <div className="mb-6">
          <img
            className="w-730px h-[430px] rounded-md"
            src={roomData?.img}
            alt=""
          />
        </div>

        <div className="flex ml-2">
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

        <div className="w-[730px]">
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-4 mt-4">
              Room Services
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
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
      <div className="bg-[#E3E3ED]  h-[310px] w-1/2 mx-auto flex-col flex justify-center rounded-md">
        <div className="">
          <div className="mb-2">
            <p className="text-2xl mb-6 text-gray-600 font-bold pt-4 text-center">
              Check Room Availability
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div>
                <p className="text-black">Check In</p>
                <DatePicker
                  className="h-10 w-[150px] text-center outline-none rounded"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <p className="text-black">Check Out</p>
                <DatePicker
                  className="h-10 text-center outline-none rounded w-[150px]"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
            <div>
              <p className="text-black">Persons</p>
              <select
                name=""
                id=""
                className="h-10 w-[320px] bg-white text-center rounded outline-none"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <button
                onClick={handleCheckAvailableRoom}
                className="bg-[#000080] text-white h-10 mt-2 p-2 rounded"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;
