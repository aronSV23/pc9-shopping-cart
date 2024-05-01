import { createContext, useState } from 'react'

//1. Crear el context
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

//2. Crear el provider, para proveer el contexto
// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFinters] = useState({
      category: 'all',
      minPrice: 0
    })
  
  return (
    <FiltersContext.Provider value={{
        filters,
        setFinters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
