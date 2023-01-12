import  React from 'react';
import {CardMedia,Typography,CardContent,Card,Button, CardActionArea, CardActions} from '@mui/material';
import home from '../assets/car2.jpg'


export default function Blog({id,title,price,brand,images,description}) {
  const ind=0;
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={home}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom fontSize={15}fontWeight={700} component="div">
          hello
          </Typography>
          <Typography pb={1}fontSize={14}>$300</Typography>
          <Typography variant="body2" color="text.secondary">
          will update
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"variant='text' >
          Add Cart
        </Button>
      </CardActions>
    </Card>
  );
}