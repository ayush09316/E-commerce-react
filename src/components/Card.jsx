import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CardMedia,
  Typography,
  CardContent,
  Card,
  Button,
  CardActionArea,
  CardActions,
  Stack,
} from "@mui/material";

export default function Blog({
  id,
  title,
  price,
  brand,
  images,
  description,
  rating,
  setBadge,
}) {
  const ind = 1;
  const HandleChange = () => {
    setBadge((prev) => prev + 1);
    return toast("Product added to the Cart");
  };
  const DeleteChange = () => {
    setBadge((prev) => (prev !== 0 ? prev - 1 : 0));
    return toast("Product removed from the Cart");
  };
  return (
    <Card sx={{ maxWidth: 330 }} key={id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={images[ind] || images[ind - 1]}
          alt={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            fontSize={15}
            fontWeight={700}
            component="div"
          >
            {title}
          </Typography>
          <Stack direction={"row"} gap={24.5}>
            <Typography pb={1} fontSize={14} fontWeight={700}>
              ${price}
            </Typography>
            <Typography pb={1} fontSize={14} fontWeight={700}>
              {brand}
            </Typography>
          </Stack>
          <Typography pb={1} fontSize={14} fontWeight={700}>
            rating:{rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction={"row"} gap={14}>
          <Button
            size="small"
            variant="contained"
            color={"success"}
            onClick={HandleChange}
          >
            Add Cart
          </Button>
          <Button
            size="small"
            variant="text"
            color={"error"}
            onClick={DeleteChange}
          >
            Remove Cart
          </Button>
        </Stack>
      </CardActions>
      <ToastContainer theme="dark" autoClose={1000} />
    </Card>
  );
}
