"use client";
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [messageCount, setMessageCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ messageCount, setMessageCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
