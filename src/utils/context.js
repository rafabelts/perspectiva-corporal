"use client";

import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const initialState = {
  agrees: false,
  userData: {
    name: "",
    gender: "",
    height: null,
    weight: null,
    body: null,
    issue: "",
    inTreatment: "",
  },
  userDataFilled: false,
  bodySelected: false,
  finalInfoAnswered: false,
};

// Gave the context of the app
const AppContext = createContext(initialState);

// Create provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Define the consumer
export const useAppContext = () => {
  return useContext(AppContext);
};
