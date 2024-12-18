import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiStar } from 'react-icons/fi'


const SingleFood = ({ food }) => {
  const { foodId, img, name, price, rating, description } = food
  const navigate = useNavigate()

  const handleOrderFood = (foodId) => {
    navigate(`/food/${foodId}`)
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={img}
          alt={name}
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700 flex items-center">
          {/* {rating.toFixed(1)} */}5
          <FiStar className="inline-block ml-1 text-yellow-400" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <p className="text-lg mb-4">
          Price: <span className="font-bold text-green-600">{price} BDT</span>
        </p>
        <button
          onClick={() => handleOrderFood(foodId)}
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <FiShoppingCart className="mr-2" />
          Order Food
        </button>
      </div>
    </div>
  )
}

export default SingleFood

