/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import swal from "sweetalert";

const FoodBookingPage = () => {
  const navigate = useNavigate();
  const { foodId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [user, loading] = useAuthState(auth);

  console.log("ox: ", orderData);

  const handleOrder = () => {
    const orderFood = {
      foodId: orderData?.foodId,
      email: user?.email,
      name: orderData?.name,
      price: orderData?.price,
      img: orderData?.img,
    };
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/order-food/create-order",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Order Successful",
          text: "Your order is successful. Check email for confirmation!",
          icon: "success",
          button: "Ok",
        });
        // event.target.reset();
        navigate("/user/my-food-orders");
      });
  };
  useEffect(() => {
    fetch(
      `https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/${foodId}`
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data?.data));
  }, [foodId]);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return (
    <div className="flex items-center justify-center h-[100vh_-_115px] py-6">
      {/* Main Container */}
      <div className="w-11/12 lg:w-3/5 xl:w-2/5 bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Food Image Section */}
        <div className="relative">
          <img
            src={orderData?.img || "https://via.placeholder.com/400x300"}
            alt={orderData?.name || "Food Item"}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded shadow-md">
            {orderData?.foodId ? `Food ID: ${orderData.foodId}` : "Unknown ID"}
          </div>
        </div>

        {/* Food Details Section */}
        <div className="p-6 space-y-6">
          {/* Food Name */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            {orderData?.name || "Delicious Food"}
          </h1>

          {/* Food Description */}
          <p className="text-gray-600 text-center leading-relaxed">
            Enjoy our freshly prepared{" "}
            <strong>{orderData?.name || "delicious dish"}</strong>, made with
            premium-quality ingredients to ensure an exceptional taste
            experience. Perfect for any occasion, this dish is sure to satisfy
            your cravings!
          </p>

          {/* Price Section */}
          <div className="flex justify-center items-center">
            <p className="text-2xl font-semibold">
              Price:{" "}
              <span className="text-red-500 font-bold">
                {orderData?.price ? `${orderData.price} TK` : "N/A"}
              </span>{" "}
              <span className="text-sm text-gray-500">/ PCS</span>
            </p>
          </div>

          {/* Nutritional Information */}
          <div className="bg-gray-100 p-4 rounded-md shadow-inner">
            <h2 className="text-lg font-semibold mb-2">Nutritional Details:</h2>
            <ul className="text-gray-600 space-y-1">
              <li>
                ✅ <strong>Calories:</strong>{" "}
                {orderData?.calories || "250 kcal"}
              </li>
              <li>
                ✅ <strong>Protein:</strong> {orderData?.protein || "15g"}
              </li>
              <li>
                ✅ <strong>Carbs:</strong> {orderData?.carbs || "30g"}
              </li>
              <li>
                ✅ <strong>Fat:</strong> {orderData?.fat || "12g"}
              </li>
            </ul>
          </div>

          {/* Order Button */}
          <div className="flex justify-center">
            <button
              onClick={handleOrder}
              className="w-full lg:w-1/2 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300 hover:bg-red-600"
            >
              Confirm Order
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-red-50 p-4 border-t border-gray-200">
          <p className="text-gray-700 text-sm text-center">
            <strong>Note:</strong> This food is prepared fresh daily. Delivery
            may take 30-45 minutes depending on your location. Contact our
            support team for any queries!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodBookingPage;
