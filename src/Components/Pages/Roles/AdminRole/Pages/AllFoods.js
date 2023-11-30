import React, { useEffect, useState } from 'react'
import AllFoodsTable from './AllFoodsTable'
import { AiOutlineDashboard } from 'react-icons/ai'
import { IoFastFoodSharp } from 'react-icons/io5'

const AllFoods = () => {
    const [allFoods, setAllFoods] = useState([])
    // console.log(orderData)
  
    useEffect(()=>{
      fetch("http://localhost:5000/api/v1/foods/all-foods").then(res => res.json()).then(data => setAllFoods(data?.data))
    },[])
  return (
    <div className='bg-[#F1F5F9] bg-gradient-to-r from-stone-100 to-blue-50 calc-height'>
            <p className=' border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center'><IoFastFoodSharp className='ml-5 mr-3 w-6 h-6'/>All Foods</p>

      <div className="overflow-x-auto">
        <table className="table w-full xl:w-3/4 mx-auto">
          {/* head */}
          <thead className="bg-base-300">
          <tr className="">
              <th></th>
              <th>Image</th>
              <th>Food ID</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allFoods.map((food, index) => <AllFoodsTable key={food?.foodId} food={food} index={index} setAllFoods={setAllFoods}></AllFoodsTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllFoods;