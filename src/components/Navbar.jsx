import {
  Stack,
  Box,
  Typography,
  IconButton,
  Badge,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Navbar = ({ data, setData, badge, setBadge }) => {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 10,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 2px",
    },
  }));

  return (

    <Box p={"1.8% 1%"} bgcolor={"#95a5a6"} >
      <Stack direction={"row"} gap={"18%"}>
        <Typography pl="2%" fontWeight={900} fontSize={"25px"}>
          SPARKS
        </Typography>
        <Stack direction={"row"} gap={5}>
          <Link
            to={"/menu"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Menu
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Shop
          </Link>
          <Link
            to={"/brands"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Brands
          </Link>
          <Link
            to={"/pages"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Pages
          </Link>
          <Link
            to={"/blog"}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "20px",
              color: "#3A1212",
            }}
          >
            Contact
          </Link>
        </Stack>
        
        <Stack direction={"row"} gap={0.1} ml="1%" mt="-0.2">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <PersonOutlinedIcon />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <FavoriteBorderOutlinedIcon />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={badge} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
