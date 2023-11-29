import React, { useEffect, useState } from 'react'
import AllFoodsTable from './AllFoodsTable'

const AllFoods = () => {
    const [allFoods, setAllFoods] = useState([])
    // console.log(orderData)
  
    useEffect(()=>{
      fetch("http://localhost:5000/api/v1/foods/all-foods").then(res => res.json()).then(data => setAllFoods(data?.data))
    },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
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