import { Box, Button, Typography, IconButton, Grid } from "@mui/material";
import HeaderImage from "../Assets/HeaderImage.jpg";
import React from "react";
import { PhotoCamera } from "@mui/icons-material";

const Header = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      direction={{ xs: "column-reverse", md: "row" }}
      p={"1rem"}
      spacing={2}
    >
      <Grid
        item
        fontWeight="900"
        justifyContent="space-between"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          color="secondary"
          sx={{ maxWidth: "500px" }}
          fontWeight="500"
          paragraph
        >
          Find best answer for your questions
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "400px", pl: { xs: "1rem", md: 0 }, pr: { xs: "1rem", md: 0 } }}
          align="justify"
          paragraph
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat excepturi
          ipsam tempore, quis delectus animi deserunt totam molestiae distinctio est, mollitia sunt,
          alias ut! Suscipit esse excepturi laudantium sequi?
        </Typography>
        <div>
          <Button variant="contained">Ask Question</Button>
          <IconButton color="primary">
            <PhotoCamera />
          </IconButton>
        </div>
      </Grid>
      <Grid item>
        {/* <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ maxWidth: { xs: "250px", md: "300px" } }}
              image={HeaderImage}
              alt="green iguana"
            />
          </CardActionArea>
        </Card> */}
        <Box
          component={"img"}
          src={HeaderImage}
          alt="HeaderImage"
          sx={{ height: { xs: "250px", md: "300px" }, borderRadius: "1rem" }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
