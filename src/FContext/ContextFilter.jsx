import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

export const ContextFilter = ({children}) => {
const [filters, setFilters] = useState({
  category: "all",
  miPrice: 0
})

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
     </FilterContext.Provider>
    
  )
}
