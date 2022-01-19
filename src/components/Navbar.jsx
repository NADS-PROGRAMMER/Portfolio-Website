import React from 'react'
import { ReactComponent as MainLogo } from '../assets/logos/MainLogo.svg'
import NavLink  from '../base-components/NavLink'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {

    const matches = useMediaQuery('(min-width:768px)');

    const NavLinks = [
        {link: <NavLink className="font-[Poppins]" routePath="/" text="Home"/>},
        {link: <NavLink className="font-[Poppins]" routePath="/" text="About"/>},
        {link: <NavLink className="font-[Poppins]" routePath="/" text="Projects"/>},
        {link: <NavLink className="font-[Poppins]" routePath="/" text="Blogs"/>},
    ]

    return (
        <nav className="w-screen h-[3rem] flex items-center justify-between p-[2rem] shadow-[0px_0px_1px_#ccc] fixed top-0">
            
            <MainLogo className="w-[2.5rem]"/>

            <button className="md:hidden">
                <MenuIcon />
            </button>
        
            <ul className="hidden md:flex gap-[2rem] lg:gap-[4.5rem]">
               {
                   NavLinks.map(link => {
                       return (
                           <li className="link-hover">
                               {link['link']}
                           </li>
                       )
                   })
               } 
            </ul>

            { matches && <Button
                sx={{
                    backgroundColor: 'black',
                    border: '1px solid white',
                    '&:hover': {
                        backgroundColor: '#171717'
                    }
                }} 
                variant="contained">
                Contact Me
            </Button> }
        </nav>
    )
}

export default Navbar
