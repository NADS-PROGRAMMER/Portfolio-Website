import React from 'react'
import Button from '@mui/material/Button';
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

/** It is the Homepage */
function Home() {

    return (
       /** Classes of the <main> tag can be located in index.css */
       <main className="main-home">

           {/*  Hero Introduction */}
            <motion.section 
                className="order-2 flex flex-col items-center md:order-1 md:items-start ">
                
                {/* Greetings Text */}
                <motion.span
                    className="text-[1.5rem] font-[Poppins] text-center text-portfolio-tertiary font-normal max-w-[23ch] sm:text-[2rem] md:text-left dark:text-orange-100">
                    Hello there! I'm Nads from the Philippines
                </motion.span>

                {/* Job Title */}
                <motion.h1 
                    className="heading-1">
                        Web Developer
                </motion.h1>
                
                {/* Resume Button */}
                <motion.span>
                    <Button
                        size="large"
                        sx={{
                            marginTop: '1rem'
                        }}
                        color="secondary"
                        variant="contained">
                        Resume
                    </Button> 
                </motion.span>
                
                <motion.span>
                    <Socials className="flex gap-[2rem] mt-[2rem]"/>
                </motion.span>
                
            </motion.section>
            
            {/* Picture */}
           <motion.section
                className="w-full h-max flex flex-col items-center justify-center md:w-max">
                <MainLogo className="img-main"/>
           </motion.section>
       </main>
    )
}

export default Home
