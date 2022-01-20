import React from 'react'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import Socials from '../components/Socials'

function Home() {

    return (
       <main className="min-h-screen flex flex-col justify-center items-center p-[4.5rem_0rem] gap-[2rem] md:flex-row md:justify-evenly">

           {/* Hero */}
            <section className="order-2 flex flex-col items-center md:order-1 md:items-start ">

                <span className="text-[1.5rem] font-[Poppins] text-center text-portfolio-tertiary font-normal md:text-left sm:text-[2rem] max-w-[23ch]">Hello there! I'm Nads from Philippines</span>

                <h1 className="text-[3rem] text-portfolio-tertiary sm:text-[4rem]">Web Developer</h1>
                
                <Button
                    size="large"
                    sx={{
                        marginTop: '1rem'
                    }}
                    color="secondary"
                    variant="contained">
                    Resume
                </Button> 

                <Socials className="flex gap-[2rem] mt-[2rem]"/>
            </section>

           <section className="w-full md:w-max h-max flex flex-col items-center justify-center">
                <MainLogo className="w-full max-w-[26rem] 2xl:max-w-[36rem] h-max"/>
           </section>
       </main>
    )
}

export default Home
