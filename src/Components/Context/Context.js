// MyContext.js

import React, { createContext, useState } from 'react';

// Create a context with an initial value (default value)
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [searchRoomData, setSearchRoomData] = useState({})
const x = 10;
  // You can provide any value or functions you want to share
  const contextValue = {
    availableRooms,
    setAvailableRooms,
    setSearchRoomData,
    searchRoomData,
    x
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
