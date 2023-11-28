import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hall = () => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div>
        <div>
        <div className="bg-[#485B6A]  h-[180px] w-1/2 mx-auto flex justify-center rounded-md mt-8">
        <div className="">
          <div className="mb-4">
            <p className="text-2xl text-white font-bold pt-4">
              Online Hall Booking
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white">Check In</p>
              <DatePicker
                className="h-10 text-center outline-none rounded"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <p className="text-white">Check Out</p>
              <DatePicker
                className="h-10 text-center outline-none rounded"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div className='text-black'>
              <p className="text-white">Shift</p>
              {/* <input
                className="h-10 text-center outline-none rounded"
                type="number"
                name=""
                id=""
              /> */}
              <select className='h-10 w-36 text-center outline-none text-black  rounded'>
                <option className='text-black' value="Full Day"></option>
                <option className='text-black' value="Half Day"></option>
                <option className='text-black' value="12 Hours"></option>
                <option className='text-black' value="24 Hours"></option>
              </select>
            </div>
            <div>
              <button className="bg-[#000080] text-white h-10 mt-6 p-2 rounded">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Hall;