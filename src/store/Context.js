import React, { useState } from "react";
import { districtList } from "../utils/districtList";

const realEstateTypes = [
  { id: 1, type: "Byt" },
  { id: 2, type: "Dům" },
  { id: 3, type: "Pozemek" },
];

export const initialStore = {
  priceCalculationForm: {
    estateTypes: realEstateTypes,
    districts: districtList,
    page: 1,
    sendStatus: "",
  },
};

export const ContextStore = React.createContext({});

export const Store = ({ children }) => {
  const [state, setState] = useState(initialStore);
  return (
    <ContextStore.Provider value={{ ...state, setState }}>
      {children}
    </ContextStore.Provider>
  );
};
