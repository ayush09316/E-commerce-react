import React from 'react'
import { Box, Typography,Grid,TextField,Button } from '@mui/material'
import home from '../assets/car2.jpg'
import Card from './Card'
import SearchIcon from "@mui/icons-material/Search";
import Loader from './Loader'
import {useGlobalContext  } from './context';

const Home = ({setBadge,data,setData}) => {
  const {isLoading,products}=useGlobalContext();
  const onSearch = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  let dataSearch=products.filter(ele=>{
    return Object.keys(ele).some(key=>ele[key].toString().toLowerCase().includes(data.toString().toLowerCase())
      )
  });
  

  if(isLoading){
    return <Loader/>
  }
  return (
    <Box bgcolor={'white'}pb={20}>
      <img src={home}alt='img'width={'100%'} height={'700px'}style={{backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/>
      <Typography color={'white'} fontSize={50}fontWeight={900}mt={-26}mb={26} textAlign={'center'}>WELCOME TO OUR SITE</Typography>
      <Typography color={'white'} fontSize={22}fontStyle='italic'mt={-26}mb={26} textAlign={'center'}>Let us help you find what you need</Typography>
      <Typography fontSize={'30px'}fontStyle={'italic'}
      mt={'-5%'}mb={'2%'}textAlign='center'>Pick your choice</Typography>
      <TextField
          placeholder={"Search here ..."}
          onChange={(e) => setData(e.target.value)}
          value={data}
          sx={{
            "& .MuiInputBase-root": {
              height: 40,
              width: "50rem",
              ml: "40%",
              mb:'20px',
              mt:'-10px',
              bgcolor:'#f1f2f6',
            },
          }}
        ></TextField>
        <Button
          onClick={() => onSearch(data)}
          variant="contained"
          sx={{
            bgcolor: "#2c3e50",
            ml: "21%",
            mt:'-9.9px',
            borderRadius: "4px",
            height: 41,
            "&:hover": { bgcolor: "#57606f" },
          }}
        >
          <SearchIcon />
        </Button>
      <Grid container bgcolor={'#b2bec3'}pt={5}pl={5}>
      { dataSearch?.map((ele)=>{
          const {id,title,price,brand,images,description,rating}=ele;
          return(
          <Grid item lg={3} pb={2} key={id}pl={1.4}>
            <Card id ={id} title={title} price={price}rating={rating} brand={brand}description={description}setBadge={setBadge} images={images}/>
          </Grid>
          )
        })
      }:
      </Grid>
    </Box>

  )
}

export default Home