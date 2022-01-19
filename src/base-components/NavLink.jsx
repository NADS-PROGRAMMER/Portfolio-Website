import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({ routePath, text, className="" }) {
    return (
        <>
         <Link className={className} to={routePath}>{text}</Link>   
        </>
    )
}

export default NavLink
