import React, { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'

export const Filters = () => {
    const { filters, setFinters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFinters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeMinCategory = (event) => { 
        setFinters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>Min Price</label>
            <input 
            type="range" 
            name="price" 
            id={minPriceFilterId} 
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select name="category" id={categoryFilterId} onChange={handleChangeMinCategory}>
                <option value="all">All</option>
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
            </select>
        </div>
    </section>
  )
}
