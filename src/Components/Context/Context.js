// MyContext.js

import React, { createContext, useState } from "react";

// Create a context with an initial value (default value)
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [searchRoomData, setSearchRoomData] = useState({});

  const contextValue = {
    availableRooms,
    setAvailableRooms,
    setSearchRoomData,
    searchRoomData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
