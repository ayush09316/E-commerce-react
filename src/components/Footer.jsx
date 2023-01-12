import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import icon1 from '../assets/visa.png'
import icon2 from '../assets/paypal.png'
import icon3 from '../assets/income.png'
import icon4 from '../assets/discover.png'

const Footer = () => {
  return (
    <div>
      <Stack direction={'row'}gap={9} pl='5%'pb={'9%'} pt='4%' bgcolor={'#dfe6e9'}>
        <Stack direction={'column'}>
            <Typography fontWeight={'700'}>About US</Typography>
            <Typography>Blog</Typography>
            <Typography>Legal Notice</Typography>
            <Typography>Secure payment</Typography>
            <Typography>Terms and Condition</Typography>
        </Stack>
        <Stack direction={'column'}>
            <Typography fontWeight={'700'}>ACCOUNT</Typography>
            <Typography>My Account</Typography>
            <Typography>Login</Typography>
            <Typography>Identity</Typography>
            <Typography>Order history</Typography>
        </Stack>
        <Stack direction={'column'} fontWeight={'700'}>
            <Typography fontWeight={'700'}>HELP & CONTACT</Typography>
            <Typography>Contact us</Typography>
            <Typography>Return</Typography>
            <Typography>Shipping</Typography>
            <Typography>FAQ #</Typography>
        </Stack>
        <Stack direction={'column'} >
            <Typography fontWeight={'700'}>SHOP</Typography>
            <Typography>Performance</Typography>
            <Typography>Details</Typography>
        </Stack>
        <Stack direction={'column'} pl={'9%'}>
            <Typography fontWeight={'700'}>SIGN UP</Typography>
            <Typography pb='3%'>You may unsubscribe at any moment. For that purpose, please find our <br/>
            contact info in the legal notice.</Typography>
            <Stack direction={'row'}>
            <TextField placeholder={'Your email address'}
            sx={{width:'60%',
            "& .MuiInputBase-root":{
              height:39
            }
          }}
            ></TextField>
            <Button variant='contained'sx={{bgcolor:'#2c3e50',borderRadius:'2px','&:hover':{bgcolor:'#57606f'}}}
            >SUSCRIBE</Button>
            </Stack>
            <Typography fontWeight={'700'} pt='4%'>FOLLOW US</Typography>
            <Stack direction={'row'} gap={0.2}>
                <FacebookRoundedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
            </Stack>
        </Stack>
      </Stack>
      <Box height={'1px'}width='100%'bgcolor={'black'} mt='-6%'>
      <Typography textAlign='center'pt={1.7}>SAFE & SECURE SHOPPING</Typography>
      <Stack direction={'row'}gap={2}justifyContent='center'>
      <img src={icon1} alt='img'height={'40px'}width={'40px'}/>
      <img src={icon2} alt='img'height={'40px'}width={'40px'}/>
      <img src={icon3} alt='img'height={'30px'}width={'30px'}/>
      <img src={icon4} alt='img'height={'40px'}width={'40px'}/>
      </Stack>
      </Box>
      <Box height={'1px'}width='100%'bgcolor={'black'} mt='4.5%'>
        <Typography textAlign={'center'}fontSize='12px'pt='5px'>@ 2023- Ecommerce software by Ayush Sharma</Typography>
      </Box>
      
    </div>
  )
}

export default Footer
