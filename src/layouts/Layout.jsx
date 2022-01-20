import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {  //children agregar componentes SE ACMBIA POR EL OUTLET
    return (
        <div>
            <Sidebar/>
            <Outlet/>
            <footer> HOLA SOY UN FOOTER</footer>
        </div>
    )
}

export default Layout
