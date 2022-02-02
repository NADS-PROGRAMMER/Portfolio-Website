import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavLink  from '../base-components/NavLink'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {

    const [darkMode, setDarkMode] = useState(false)
    const matches = useMediaQuery('(min-width:768px)');
    const location = useLocation()
    
    const NavLinks = [
        {link: <NavLink className="nav-links" routePath="/" text="Home"/>, path: "/"},
        {link: <NavLink className="nav-links" routePath="/about" text="About"/>, path: "/about"},
        {link: <NavLink className="nav-links" routePath="/projects" text="Projects"/>, path: "/projects"},
        {link: <NavLink className="nav-links" routePath="/blogs" text="Blogs"/>, path: "/blogs"},
    ]

    useEffect(() => {

        if (darkMode) 
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark');
    }, [darkMode])
    
    return (
        <motion.nav 
            aria-label='primary'
            className="flex items-center justify-between z-[1] px-[1rem] fixed top-0 w-full bg-portfolio-bg shadow-sm md:justify-around dark:bg-slate-900">
          
            { matches && 
                <Button
                    sx={{
                        '$:focus': {
                            border: '24px solid red'
                        }
                    }}
                    color="secondary"
                    variant="contained">
                    Contact Me
                </Button> 
            }

            {/* Navbar Links */}
            <ul className="hidden items-center gap-[2rem] md:flex self-stretch">
                {
                    NavLinks.map((link, index) => {
                        return (
                            <motion.li           
                                className="h-full flex items-center relative" key={index}>
                                {link['link']}
                                {
                                /** Adding a layoutId lets the motion give it an animation.
                                 * 
                                 * This is the line under the nav link. */
                                location.pathname == link.path &&
                                    <motion.div layoutId="nav-link" className="h-[.2rem] absolute bg-portfolio-tertiary left-0 right-0 bottom-0 dark:bg-orange-100"></motion.div> 
                                }
                            </motion.li>
                        )
                    })
                }
            </ul>
            
            <section className="flex items-center gap-[1.5rem] md:flex-row-reverse">
                 {/* Light and Dark Icon */}
                 <button 
                      aria-label="Dark Mode"
                      onClick={() => { 
                        setDarkMode(!darkMode)
                      }}>
                        
                    <AnimatePresence>
                        <motion.svg  className="svg-primary block h-[2rem] w-[2rem]">
                            { darkMode ? <LightModeIcon fontSize="medium"/> : <DarkModeIcon /> }
                        </motion.svg>
                      </AnimatePresence>
                 </button>
              
                <span className="text-portfolio-tertiary text-xl py-[1rem] dark:text-slate-100">Nads Marcelo</span>
            </section>
            
            
            {/* Hamburger Icon
                
                ONLY show on mobile screen devices.
            */}
            <svg className="svg-primary block h-[2rem] w-[2rem] ml-auto md:hidden">
                <MenuIcon />
            </svg>
        </motion.nav>
    )
}

export default Navbar
