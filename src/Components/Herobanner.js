import React from 'react'
import { Box, Typography,Button } from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../theme'
import HerobannerImage from '../assets/images/banner.png'
function Herobanner() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } ,position:'relative'}}>
                <Typography color="#FF3010" fontWeight="600" fontSize="25px" sx={{textShadow:"2px 2px 1px grey"}}>
                    Fitness Club
                </Typography>
                <Typography fontWeight='700' fontSize='50px' sx={{fontSize:{lg:'44px',xs:'40px'}, mt:'20px' ,mb:'20px'}} >
                    Sweat,Smile <br />and Repeat
                </Typography>
                <Typography color={theme.palette.secondary.contrastText} mb={3} fontSize='22px' lineHeight='30px'>
                    Check Out the most efficient exercises
                </Typography>
                <Button variant='contained' sx={{backgroundColor:'#d32f2f',mb:'20px'}} href='#exercises'>Explore Exercises</Button>
                <Typography fontWeight='600' color='#ff2625'sx={{opacity:0.1,display:{lg:'block',sm:'none'},fontSize:'200px'}}>Exercises</Typography>
            </Box>
            <img src={HerobannerImage} alt="banner" className='hero-banner-img' height='950px' style={{position:'absolute',right:50,top:50}}></img>
            
        </ThemeProvider>


    )
}

export default Herobanner
