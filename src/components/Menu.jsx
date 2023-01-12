import React from 'react'
import {Stack, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Stack direction={'column'} pb={8.7}pt={8}gap={1} >
        <Typography fontWeight={800}fontSize={'50px'} textAlign={'center'}>404</Typography>
        <Typography fontWeight={700} fontSize={'50px'} textAlign={'center'}>Page Not Found</Typography>
        <Button color={'info'}variant='contained'sx={{m:'0 40rem',}}>
            <Link to={'/'}style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}>Home
            </Link>
        </Button>
    </Stack>
  )
}

export default Menu