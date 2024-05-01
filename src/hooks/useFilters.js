import { useContext } from "react"
import { FiltersContext } from "../context/filter"


export function useFilters () {
    const { filters, setFinters } = useContext(FiltersContext)
  
    const filterProduts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice && 
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return { filterProduts, setFinters, filters }
  }