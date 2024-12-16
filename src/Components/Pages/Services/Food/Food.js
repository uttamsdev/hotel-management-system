import React, { useEffect, useState } from "react";
import SingleFood from "./SingleFood";

const Food = () => {
  const [foods, setFoods] = useState([]);
  console.log("foods: ", foods);

  useEffect(() => {
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="w-ull xl:w-[1100px] mx-auto xl:min-h-[100vh_-_115px] pb-6">
      <div>
        <p className="uppercase text-[#000080] text-xl xl:text-2xl mt-8 font-bold mb-2">
          Available Foods
        </p>
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
