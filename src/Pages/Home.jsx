import React from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ReactComponent as NameLogo } from '../assets/logos/NameLogo.svg'

function Home() {

    
    return (
        <main>

            <Stack
                direction="column"
                alignItems="center"
                sx={{padding: '2rem'}}
                >
                <NameLogo className="w-full max-w-[36rem]"/>
                <h1 className="text-[2rem] lg:text-[3vw]">Web Developer</h1>
                <Button 
                    sx={{
                        backgroundColor: 'black',
                        border: '1px solid white',
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '1.2rem',
                        '&:hover' : {
                            backgroundColor: '#171717'
                        }
                    }}
                    variant="contained">
                    Contact Me
                </Button>
            </Stack>

            <Stack>
                <SvgIcon>
                    
                </SvgIcon>
            </Stack>
        </main>
    )
}

export default Home
