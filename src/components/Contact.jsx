import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box bgcolor={'#ecf0f1'}pb={11}>
      <Stack gap={3}pl={15}pt={8}>
      <Typography fontWeight={700}pb={8} fontSize={29}>CONTACT US</Typography>
      <Stack direction={'row'}gap={30}>
      <Typography>Subject</Typography>
      <TextField placeholder='Customer Service'sx={{width:'45%',
            "& .MuiInputBase-root":{
              height:39
            }
          }}></TextField>
      </Stack>
      <Stack  direction={'row'}gap={30}>
      <Typography>Email address</Typography>
      <TextField placeholder='Your Email address' sx={{width:'41.7%',
            "& .MuiInputBase-root":{
              height:39,ml:'-8%'
            }
          }}></TextField>
      </Stack>
      <Stack direction={'row'}gap={30}>
      <Typography>Attachment</Typography>
      <Stack direction={'row'}>
      <TextField disabled sx={{width:'30rem',
            "& .MuiInputBase-root":{
              height:39,ml:'-6%',pr:''
            }
          }}></TextField>
          <Button variant='contained'sx={{bgcolor:'#2c3e50',height:40,fontSize:10,borderRadius:'2px','&:hover':{bgcolor:'#57606f'}}}
            >Choose File</Button>
      </Stack>
      </Stack>
      <Stack direction={'row'}gap={30}>
      <Typography>Message</Typography>
      <TextField placeholder='How can we help'multiline  sx={{width:'48%',
            "& .MuiInputBase-root":{
              height:39,ml:'-2%'}
          }}></TextField>
      </Stack>
      <Button variant='contained'sx={{bgcolor:'#2c3e50',height:40,width:20,borderRadius:'4px','&:hover':{bgcolor:'#57606f'}}}
            >Send</Button>
      </Stack>
    </Box>
  )
}

export default Contact
