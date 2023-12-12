import React, { useContext, useState } from 'react'
import { FilterContext } from '../FContext/ContextFilter'

export const Filters = () => {

    const {setFilters} = useContext(FilterContext)
    // ojo, 
    const [minPrice, setMinPrice] = useState()

    const handleMinPrice = e => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({...prevState, minPrice: e.target.value}))
        //setMinPrice()
    } 

    const handleCategory = e => {
        setFilters(prevState => ({...prevState, category: e.target.value}))
    }

    return (
        <>
            <div>
                <label htmlFor='price' >Precio</label>
                <input type="range"
                    name=''
                    id='price'
                    min={0}
                    max={70} 
                    onChange={e => handleMinPrice(e)}
                    />
                    <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select name="" id="category" onChange={e => handleCategory(e)}>
                    <option value="all">Todos</option>
                    <option value="Electrodomésticos">Electrodomesticos</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Limpieza">Limpieza</option>
                </select>
            </div>
        </>
    )
}
