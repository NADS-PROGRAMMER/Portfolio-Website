import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import {ReactComponent as MainLogo} from '../assets/logos/MainLogo.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const matches = useMediaQuery('(min-width:600px)')
    const values = [ 
        {text: "Home", routePath: '/'},
        {text: "About", routePath: '/about'},
        {text: "Projects", routePath: '/projects'} 
    ]
    return (
        <Stack 
            sx={{
                width: '100vw',
                backgroundColor: 'black',
                padding: `${matches ? "56px 147px" : "2rem"}`
            }}
            spacing={2}
            direction="row" 
            justifyContent="space-between"
            alignItems="center">
            
            <SvgIcon sx={{fontSize: '2rem'}}>
                <MainLogo />
            </SvgIcon>

            <MenuIcon sx={{ fontSize: '2rem' }}/>
        </Stack>
    )
}

export default Navbar
