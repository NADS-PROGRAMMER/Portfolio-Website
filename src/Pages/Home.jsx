import React from 'react'
import Button from '@mui/material/Button';
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'
import Variants from '../variants/Variants'

/** It is the Homepage */
function Home() {

    const childVariant = {

        initial: {
            opacity: 0,
            x: '100%'
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: .2
            }
        },
    }
    return (
       /** Classes of the <main> tag can be located in index.css */
       <motion.main 
           variants={Variants.homeVariant}
           initial="initial"
           animate="animate"
           exit="exit"
           className="main-home">
        
           {/*  Hero Introduction */}
            <motion.section 
                variants={childVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="order-2 flex flex-col items-center md:order-1 xl:items-start ">
                
                {/* Greetings Text */}
                <motion.span
                    variants={childVariant}
                    className="text-[1.5rem] font-[Poppins] text-center text-portfolio-tertiary font-normal max-w-[23ch] sm:text-[2rem] xl:text-left dark:text-orange-100">
                    Hello there! I'm Nads from the Philippines
                </motion.span>

                {/* Job Title */}
                <motion.h1 
                    variants={childVariant}
                    className="heading-1">
                        Web Developer
                </motion.h1>
                
                {/* Resume Button */}
                <motion.span variants={childVariant}>
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
                
                <motion.span variants={childVariant}>
                    <Socials className="flex gap-[2rem] mt-[2rem]"/>
                </motion.span>
                
            </motion.section>
            
            {/* Picture */}
           <motion.section
                className="w-full h-max flex flex-col items-center justify-center xl:w-max">
                <MainLogo className="img-main"/>
           </motion.section>
       </motion.main>
    )
}

export default Home
