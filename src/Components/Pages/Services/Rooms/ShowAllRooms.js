import React, { useEffect, useState } from 'react'
import ShowSingleRoom from './ShowSingleRoom';

const ShowAllRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/products/rooms").then(res => res.json()).then(data => setRooms(data?.data))
  },[])
  return (
    <div className='w-full xl:w-[1100px] mx-auto'>
        <div>
            <div>
                <p className='uppercase text-[#000080] text-2xl mt-8 font-bold mb-2'>Our All Rooms</p>
            </div>
            <div className='grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6'>
              {
                rooms?.map(room => <ShowSingleRoom key={room?.roomId} room={room}></ShowSingleRoom>)
              }
            </div>
        </div>
    </div>
  )
}

export default ShowAllRooms;