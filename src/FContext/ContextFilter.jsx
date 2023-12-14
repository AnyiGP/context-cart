import React, { createContext, useState } from "react";

//crea el contexto
export const FilterContext = createContext();

export const ContextFilter = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    //provee el contexto y le pasa el estado de filters
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
