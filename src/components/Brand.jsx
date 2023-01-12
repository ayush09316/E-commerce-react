import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'


const Brand = () => {
  return (
    <Box>
        <Typography textAlign={'center'} fontSize='30px'fontWeight={700}>Sponsered By</Typography>
    <Grid container pl={2} pt={3}>
        <Grid item lg={3} pb={3} >
        <img src={logo1}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>
        <Grid item lg={3} >
        <img src={logo2}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>
        <Grid item lg={3}>
        <img src={logo3}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>
        <Grid item lg={3}>
        <img src={logo1}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>
        <Grid item lg={3}>
        <img src={logo2}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>
        <Grid item lg={3} pb={3}>
        <img src={logo3}alt={'img'} height={'200px'}width={'200px'}/>
        </Grid>

    </Grid>
    </Box>
  )
}

export default Brand