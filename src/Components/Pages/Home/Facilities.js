import React from 'react'
import { FaWifi } from "react-icons/fa";
import { FaWater } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";


const Facilities = () => {
  return (
    <div className='w-full xl:w-[1100px] mx-auto text-[#5e6268] flex flex-col xl:flex-row gap-8 '>
        <div className='w-[350px] xl:w-[540px] h-[175px] border border-gray-300 p-4 mx-auto'>
            <h1 className='uppercase text-2xl text-center text-[#000080]'>Who we are!</h1>
            <p className='text-lg mb-2'>Hotel Redison</p>
            <p className='text-lg'>83-88 , Bir Uttom A.k Khandakar Sarak Mohakhali C/A, Dhaka-1212, Bangladesh</p>
        </div>
        <div>
          <p className='text-2xl font-semibold text-[#000080] uppercase mb-2'>Facilities</p>
          <div className='grid grid-cols-2 place-content-center place-items-center xl:flex gap-4'>
            <div className='w-[113px] h-[105px] bg-[#FBE2E3] flex flex-col justify-center items-center rounded'>
              <FaWifi className='text-[#000080] text-3xl'/>
              <p>Wifi</p>
            </div>
            <div className='w-[113px] h-[105px] bg-[#FBE2E3] flex flex-col justify-center items-center rounded'>
              <FaWater className='text-[#000080] text-3xl'/>
              <p>Hot Water</p>
            </div>
            <div className='w-[113px] h-[105px] bg-[#FBE2E3] flex flex-col justify-center items-center rounded'>
              <TbAirConditioning className='text-[#000080] text-3xl'/>
              <p>Air Condition</p>
            </div>
            <div className='w-[113px] h-[105px] bg-[#FBE2E3] flex flex-col justify-center items-center rounded'>
              <FaPhoneVolume className='text-[#000080] text-3xl'/>
              <p>Intercom</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Facilities;