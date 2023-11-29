// MyContext.js

import React, { createContext, useState } from "react";

// Create a context with an initial value (default value)
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [searchRoomData, setSearchRoomData] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [allRoomOrder, setAllRoomOrder] = useState([]);
  const [allFoodOrder, setAllFoodOrder] = useState([])

  const getAllUsers = async () => {
    await fetch("http://localhost:5000/api/v1/users/get-users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data?.data));
  };

  const getAllRooms = async () => {
    await fetch("http://localhost:5000/api/v1/products/rooms")
      .then((res) => res.json())
      .then((data) => setAllRooms(data?.data));
  };
  const getAllFoods = async () => {
    await fetch("http://localhost:5000/api/v1/foods/all-foods")
      .then((res) => res.json())
      .then((data) => setAllFoods(data?.data));
  };
  const getAllRoomOrders = async () => {
    await fetch("http://localhost:5000/api/v1/orders/room-orders")
      .then((res) => res.json())
      .then((data) => setAllRoomOrder(data?.data));
  };
  const getAllFoodOrders = async () => {
    await fetch("http://localhost:5000/api/v1/order-food/all-foods-orders")
      .then((res) => res.json())
      .then((data) => setAllFoodOrder(data?.data));
  };
  // You can provide any value or functions you want to share
  const contextValue = {
    availableRooms,
    setAvailableRooms,
    setSearchRoomData,
    searchRoomData,
    getAllUsers,
    allUsers,
    getAllRooms,
    allRooms,
    getAllFoods,
    allFoods,
    getAllRoomOrders,
    allRoomOrder,
    getAllFoodOrders,
    allFoodOrder
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
