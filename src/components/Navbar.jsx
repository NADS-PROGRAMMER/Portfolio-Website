import React from 'react'
import NavLink  from '../base-components/NavLink'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion'

function Navbar() {

    const matches = useMediaQuery('(min-width:768px)');

    const NavLinks = [
        {link: <NavLink className="nav-links link-hover" routePath="/" text="Home"/>},
        {link: <NavLink className="nav-links link-hover" routePath="/about" text="About"/>},
        {link: <NavLink className="nav-links link-hover" routePath="/projects" text="Projects"/>},
        {link: <NavLink className="nav-links link-hover" routePath="/blogs" text="Blogs"/>},
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
            className="flex items-center justify-between p-[1rem] fixed top-0 w-full bg-portfolio-bg shadow-sm md:justify-around lg:p-[1rem]">
          
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
                    NavLinks.map(link => {
                        return (
                            link['link']
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
