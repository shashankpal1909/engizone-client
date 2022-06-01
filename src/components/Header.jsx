import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import HeaderImage from "../Assets/HeaderImage.jpg";
import React from "react";
import { PhotoCamera } from "@mui/icons-material";

const Header = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={3}
        fontWeight="900"
        justifyContent="space-evenly"
        mt={10}
      >
        <Box sx={{}} flex={4} marginLeft="80px" p={2}>
          <Typography variant="h3" color="secondary" p={2} fontWeight="500">
            Find best answer for your questions
          </Typography>
          <Typography variant="body1" p={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            repellat excepturi ipsam tempore, quis delectus animi deserunt totam
            molestiae distinctio est, mollitia sunt, alias ut! Suscipit esse
            excepturi laudantium sequi?
          </Typography>
          <Box p={2}>
          <Button variant="contained">
            Ask Question
          </Button>
            <IconButton color="primary">
             <PhotoCamera/>
            </IconButton>
          </Box>
          
        </Box>
        <Box
          sx={{
            width: 500,
            marginRight: 100,
          }}
          flex={4}
          spacing={2}
        >
          <img
            src={HeaderImage}
            alt="HeaderImage"
            style={{
              height: 450,
              width: 650,
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
