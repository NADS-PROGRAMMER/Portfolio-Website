import React from 'react'
import { useLocation } from 'react-router-dom'
import NavLink  from '../base-components/NavLink'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion'

function Navbar() {

    const matches = useMediaQuery('(min-width:768px)');

    const location = useLocation()
    
    const NavLinks = [
        {link: <NavLink className="nav-links" routePath={location.pathname != '/' ? '/' : ''} text="Home"/>},
        {link: <NavLink className="nav-links" routePath="/about" text="About"/>},
        {link: <NavLink className="nav-links" routePath="/projects" text="Projects"/>},
        {link: <NavLink className="nav-links" routePath="/blogs" text="Blogs"/>},
    ]
    
    const navbarVariants = {

        initial: {
            opacity: 0,
            y: '-100%'
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
                stiffness: '100',
            }
        }
    }

    return (
        <motion.nav 
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-between z-[1] p-[1rem] fixed top-0 w-full bg-portfolio-bg shadow-sm md:justify-around lg:p-[1rem]">
          
            { matches && 
                <Button
                    color="secondary"
                    variant="contained">
                    Contact Me
                </Button> 
            }

            {/* Navbar Links */}
            <ul className="hidden items-center gap-[2rem] md:flex">
                {
                    NavLinks.map((link, index) => {
                        return (
                            <li className="link-hover" key={index}>
                                {link['link']}
                            </li>
                        )
                    })
                }
            </ul>

            <span className="text-portfolio-secondary text-xl">Nads Marcelo</span>
            
            {/* Hamburger Icon */}
            <svg className="svg-primary block h-[2rem] w-[2rem] ml-auto md:hidden">
                <MenuIcon  text="primary"/>
            </svg>
        </motion.nav>
    )
}

export default Navbar
