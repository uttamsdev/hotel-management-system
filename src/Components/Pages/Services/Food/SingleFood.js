/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading";

const SingleFood = ({ food }) => {
  const { foodId, img, name, price } = food;
  
  const navigate = useNavigate();
 
  console.log("single food: ", food);

  const handleBookFood = (foodId)=> {
    navigate(`/food/${foodId}`)
  }
  return (
    <div className="w-[350px] h-[360px] shadow-xl bg-white relative">
      <img className="w-full xl:w-[356px] h-[206px]" src={img} alt="" />
      <div className="p-2">
        <p className="text-xl">{name}</p>
        <p className="text-lg">
          Price: {price} <span className="font-bold">BDT</span>
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleBookFood(foodId);
            }}
            className="text-[#000080] w-[340px] mt-2 h-10 border border-[#000080] hover:bg-[#000080] duration-500 hover:text-white absolute bottom-4"
          >
            Order Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
