import React, { useEffect, useState } from "react";
import ShowSingleRoom from "../Services/Rooms/ShowSingleRoom";
import { Link } from "react-router-dom";
import SingleFood from "../Services/Food/SingleFood";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  console.log(foods);
  useEffect(() => {
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data?.data?.slice(0, 6)));
  }, []);
  return (
    <div className="w-full xl:w-[1100px] mx-auto mt-12 border-t">
      <div className="flex justify-between">
        <p className="text-xl xl:text-2xl font-semibold text-[#000080] uppercase mt-3 mb-2">
          Foods we offer
        </p>
        <p>
          <Link className="link link-error text-[18px]" to="/food">
            Show All foods
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center xl:grid-cols-3 gap-6">
        {foods?.map((room) => (
          <SingleFood key={room?.foodId} food={room}></SingleFood>
        ))}
      </div>
    </div>
  );
};

export default Foods;
