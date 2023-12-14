import React from 'react'
import { Link, Outlet} from "react-router-dom"
import { Layout } from '../components/layout/Layout'

export const Store = () => {
  return (
    <div>Store

         <header>
            {/* <nav>
                <Link to="/store" >Store</Link>
                <Link to="/cart" >Cart</Link>
                <Link to="/product" >Product</Link>
            </nav> */}
            
        </header>
        <main>
          <h1>Enrutado</h1>
          
            <Outlet />
        </main>
    </div>
  )
}
