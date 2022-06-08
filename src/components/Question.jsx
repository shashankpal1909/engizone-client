import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
  IconButton,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeaderImage from "../assets/HeaderImage.jpg";

const Question = () => {
  const [bookmark, setBookmark] = useState(true);
  const [favorite, setFavorite] = useState(true);
  const tags = ["Tag", "Tag", "Tag"];

  const handleBookmark = (bookmark) => {
    console.log(bookmark);

    setBookmark(!bookmark);
  };
  // useEffect(() => {
  //   handleBookmark(bookmark);
  // }, []);

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label=""></Avatar>}
          action={
            <CardActions>
              <IconButton
                aria-label="add to favorites"
                onClick={(favorite) => setFavorite(!favorite)}
              >
                <FavoriteIcon sx={!favorite ? { color: red[500] } : {}} />
              </IconButton>
              <IconButton
                aria-label="bookmark"
                // onClick={(bookmark) => setBookmark(!bookmark)}
                onClick={handleBookmark}
              >
                {!bookmark ? <BookmarkAddedIcon sx={{ color: "green" }} /> : <BookmarkIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon sx={{ color: "blue" }} />
              </IconButton>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </CardActions>
          }
          title="Username"
          subheader="Sep 14, 2016"
        />
        {/* <CardActionArea> */}
        <CardMedia component="img" image={HeaderImage} />
        <CardContent>
          <Typography variant="h6">Question Title</Typography>
          <Typography variant="body1" color="text.primary">
            Ex sit culpa dolor ut. Est reprehenderit duis minim elit. Velit culpa qui reprehenderit
            occaecat ipsum eu eiusmod quis dolore tempor elit qui quis laborum.
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        <CardContent>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "flex-start", sm: "space-between" }}
          >
            <CardActions>
              {/* <ButtonGroup size="small" variant="contained"> */}
              {tags.map((tag) => (
                // <Chip label={tag} onClick={() => {}} variant="outlined" />
                <Button variant="contained">{tag}</Button>
              ))}
              {/* </ButtonGroup> */}
            </CardActions>
            <CardContent>
              <Chip label={`Answers: ${2}`} variant="outlined" sx={{ color: "green" }} />
              <Chip label={`Votes: ${3}`} variant="outlined" />
              <Chip label={`Views: ${4}`} variant="outlined" />
              {/* <Typography component="span">Answers: {2}</Typography>
            <Typography component="span">Votes: {3}</Typography>
            <Typography component="span">Views: {5}</Typography> */}
            </CardContent>
          </Box>
        </CardContent>
      </Card>
      {/* </Paper> */}
    </Grid>
  );
};

export default Question;
