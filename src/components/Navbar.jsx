import React from 'react'
import NavLink  from '../base-components/NavLink'
import Socials from './Socials'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    const matches = useMediaQuery('(min-width:768px)');

    const NavLinks = [
        {link: <NavLink className="font-[Poppins] text-portfolio-primary" routePath="/" text="Home"/>},
        {link: <NavLink className="font-[Poppins] text-portfolio-primary" routePath="/" text="About"/>},
        {link: <NavLink className="font-[Poppins] text-portfolio-primary" routePath="/" text="Projects"/>},
        {link: <NavLink className="font-[Poppins] text-portfolio-primary" routePath="/" text="Blogs"/>},
    ]

    // lg:p-[2rem_13.25rem]
    return (
        <nav className="flex items-center justify-around p-[1rem] fixed top-0 w-full bg-portfolio-bg lg:p-[1rem] shadow-md">
          
          { matches && 
          <Button
            color="primary"
            variant="contained">
              Contact Me
          </Button> }

          <ul className="hidden md:flex items-center gap-[2rem]">
              {
                  NavLinks.map(link => {
                      return (
                          link['link']
                      )
                  })
              }
          </ul>

         <Socials className="hidden md:flex gap-[1rem]"/>

        <svg className="md:hidden social block h-[2rem] w-[2rem] ml-auto">
              <MenuIcon  text="primary"/>
        </svg>
        
        </nav>
    )
}

export default Navbar
