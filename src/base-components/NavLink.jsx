import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({ routePath, text }) {
    return (
        <>
         <Link to={routePath}>{text}</Link>   
        </>
    )
}

export default NavLink
