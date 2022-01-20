import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import Socials from '../components/Socials'

function Home() {
    const matches = useMediaQuery('(min-width:768px)');
    

    return (
       <main className="min-h-screen flex flex-col justify-center items-center p-[4.5rem_0rem] gap-[1rem]">

           <section className="w-full md:w-max h-max flex flex-col items-center justify-center">
                <MainLogo className="w-full max-w-[36rem] 2xl:max-w-[46rem] h-max"/>
           </section>

            { !matches && <Button
            sx={{
                bgcolor: '#444CF7',
                '&:hover': {
                    backgroundColor: '#5760fd'
                }
            }}
            variant="contained">
              Contact Me
          </Button> }

          <Socials className="md:hidden flex gap-[2rem]"/>
       </main>
    )
}

export default Home
