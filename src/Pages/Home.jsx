import React from 'react'
import Button from '@mui/material/Button';
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

function Home() {

    const textAnimation = {

        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: .1,
                when: 'beforeChildren',
                staggerChildren: .3
            }
        }
    }

    const leftVariant = {

        initial: {
            x: '100%',
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5,
                type: 'spring',
                stiffness: '300',
                damping: 20
            }
        }
    }

    return (
       <main className="main-home">

           {/* Hero */}
            <motion.section 
                variants={textAnimation}
                initial="initial"
                animate="animate"
                className="order-2 flex flex-col items-center md:order-1 md:items-start ">

                <motion.span
                    variants={leftVariant} 
                    className="text-[1.5rem] font-[Poppins] text-center text-portfolio-tertiary font-normal max-w-[23ch] sm:text-[2rem] md:text-left">
                    Hello there! I'm Nads from Philippines
                </motion.span>

                <motion.h1 variants={leftVariant}  className="heading-1">Web Developer</motion.h1>
                
                <motion.span variants={leftVariant} >
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
                
                <motion.span variants={textAnimation}>
                    <Socials className="flex gap-[2rem] mt-[2rem]"/>
                </motion.span>
                
            </motion.section>

           <section className="w-full h-max flex flex-col items-center justify-center md:w-max">
                <MainLogo className="h-max w-full max-w-[26rem] 2xl:max-w-[36rem]"/>
           </section>
       </main>
    )
}

export default Home
