import React, { useEffect, useState } from "react";
import SingleFood from "./SingleFood";


const Food = () => {
  const [foods, setFoods] = useState([]);
  console.log("foods: ", foods);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/foods/all-foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="w-ull xl:w-[1100px] mx-auto h-screen">
      <div>
        <p className="uppercase text-[#000080] text-xl xl:text-2xl mt-8 font-bold mb-2">Available Foods</p>
      </div>

      <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
        {foods?.data?.map((food) => (
          <SingleFood key={food?.foodId} food={food}></SingleFood>
        ))}
      </div>
    </div>
  );
};

export default Food;  
