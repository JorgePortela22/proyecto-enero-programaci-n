import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div>
            <nav> Este es el Navbar</nav>
            <Outlet/>
            <footer> Este es el footer</footer>
        </div>
    )
}

export default LayoutAdmin
