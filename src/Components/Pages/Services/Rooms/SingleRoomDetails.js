import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleRoomDetails = () => {
    const {roomId} = useParams();
    const [roomData, setRoomData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/products/rooms/${roomId}`)
          .then((res) => res.json())
          .then((data) => setRoomData(data.data[0]));
      }, [roomId]);
  return (
    <div className="w-full xl:w-[1100px] mx-auto mt-6 flex">
    <div className='mx-auto'>
      <div className="mb-6">
        <img className="w-730px h-[430px] rounded-md" src={roomData?.img} alt="" />
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
  </div>
  )
}

export default SingleRoomDetails;