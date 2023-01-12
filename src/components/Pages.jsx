import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import pic from '../assets/pic.png'
import pic1 from '../assets/pic-1.png'
import pic2 from '../assets/pic-2.png'


const Pages = () => {
  return (
    <Box bgcolor={'#ced6e0'}pt={4}pb={4}mb={1}>
        <Stack direction={'row'}gap={8}pl={8}>
            <Stack direction={'column'}>
                <Typography fontWeight={700} pb={5}> Our Company</Typography>
                <Typography>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</Typography>
                <Typography>Lorem set sint occaecat cupidatat non</Typography>
                <Typography>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</Typography>
                <Typography pt={2}>Top quality products<br/>
                Best customer service<br/>
                30-days money back guarantee</Typography>

            </Stack>
            <Stack direction={'column'}>
                <Typography fontWeight={700} pb={2}>Our Team</Typography>
                <Stack direction={'row'} gap={2} pb={2}>
                <img src={pic2} alt='img'height={50} width={50} />
                <img src={pic} alt='img'height={50} width={50} />
                <img src={pic1} alt='img'height={50} width={50} />
                </Stack>
                <Typography>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</Typography>
                
            </Stack>
            <Stack direction={'column'}>
                <Typography fontWeight={700}pb={5}>Testimonials</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore adipisci distinctio voluptatum fugit odit dicta nihil alias culpa <br/>
                ratione maxime necessitatibus illum, eos a nemo similique ea sint molestias recusandae?</Typography>
                <Typography>“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>
                deserunt mollit anim id est laborum.”</Typography>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Pages