import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dateObjectStartDate = new Date(startDate);
  const dateObjectEndDate = new Date(endDate);
  const formattedStartDate = dateObjectStartDate.toISOString().split("T")[0];
  const formattedEndDate = dateObjectEndDate.toISOString().split("T")[0];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCheckAvailableRoom = async () => {
    setLoading(true);
    const date = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };

    //searched data store
    const searchData = {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      person: inputValue ? inputValue : 1,
    };

    if (Object.keys(searchData).length) {
      localStorage.setItem("search", JSON.stringify(searchData));
    }
    await fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/search-available-rooms?${new URLSearchParams(
        date
      ).toString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("rooms", JSON.stringify(data));
        }
        console.log("data: ", data);
      });
    setLoading(false);
    navigate("/available-rooms");
  };

  return (
    <div className="banner mb-12 ">
      <div className="h-[180px] xl:h-[350px] mx-auto text-white banner-items">
        <h1 className="text-3xl xl:text-5xl font-bold  xl:mt-10 ">
          Hotel Radison
        </h1>
        <p className="text-4xl text-center xl:text-7xl font-bold">
          Good Staff Place!
        </p>
      </div>

      <div className="bg-[#485B6A]/75 h-auto w-3/4 pb-6 xl:pb-0  xl:h-[180px] xl:w-1/2 mx-auto flex justify-center rounded-md flex-col xl:flex-row">
        <div className="">
          <div className="mb-4">
            <p className="text-xl text-center xl:text-left xl:text-2xl text-white font-bold pt-4">
              Online Room Booking
            </p>
          </div>
          <div className="flex items-center gap-4 flex-col xl:flex-row">
            <div>
              <p className="text-white">Check In</p>
              <DatePicker
                className="h-10 text-center outline-none rounded"
                selected={startDate}
                minDate={new Date()}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <p className="text-white">Check Out</p>
              <DatePicker
                className="h-10 text-center outline-none rounded"
                selected={endDate}
                minDate={new Date()}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div>
              <p className="text-white">Persons</p>
              <select
                name=""
                id=""
                className="h-10 w-[200px] xl:w-[180px] bg-white text-center rounded outline-none"
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
            <div>
              <button
                onClick={handleCheckAvailableRoom}
                className="bg-[#000080] text-white h-10 mt-2 xl:mt-6 p-2 px-4 rounded w-[156px] "
              >
                {loading ? (
                  <div className="flex items-center gap-1 justify-center">
                    <ImSpinner3
                      className="animate-spin"
                      style={{ fontSize: "18px" }}
                    />
                    Checking...
                  </div>
                ) : (
                  <span className="whitespace-nowrap"> Check Availability</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
