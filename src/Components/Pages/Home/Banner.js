import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";

const Banner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [persons, setPersons] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleCheckAvailableRoom = async () => {
    setLoading(true);
    const date = {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    };

    const searchData = {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      person: persons,
    };

    localStorage.setItem("search", JSON.stringify(searchData));

    try {
      const response = await fetch(
        `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/products/search-available-rooms?${new URLSearchParams(
          date
        ).toString()}`
      );
      const data = await response.json();
      if (data) {
        localStorage.setItem("rooms", JSON.stringify(data));
      }
      navigate("/available-rooms");
    } catch (error) {
      console.error("Error fetching available rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white h-[750px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?luxury,hotel')",
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Hotel Radison
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Discover comfort, luxury, and unforgettable experiences at Hotel
            Radison
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Check In
              </label>
              <div className="relative">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  className="w-full bg-gray-50 text-gray-900 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300"
                  placeholderText="Select date"
                />
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Check Out
              </label>
              <div className="relative">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  minDate={startDate}
                  className="w-full bg-gray-50 text-gray-900 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300"
                  placeholderText="Select date"
                />
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Guests
              </label>
              <div className="relative">
                <select
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className="w-full bg-gray-50 text-gray-900 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 appearance-none"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
                <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2 flex items-end">
              <button
                onClick={handleCheckAvailableRoom}
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-2 px-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-base"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <ImSpinner3 className="animate-spin mr-2" />
                    Checking...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaSearch className="mr-2" />
                    Check Availability
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
