import React from 'react'
import { Filters } from '../Filters'
import { NavBar } from './NavBar'

export const Header = () => {
    return (
        <div>
            <h1>REACT SHOPPING  </h1>
            <NavBar />
            <Filters />
        </div>
    )
}
