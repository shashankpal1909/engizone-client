import React from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton,
  ButtonGroup,
  Button,
  Chip,
  Box,
  Paper,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const QuestionPreview = () => {
  const [bookmark, setBookmark] = React.useState(true);
  const [favorite, setFavorite] = React.useState(true);
  const tags = ["Tag1", "Tag2", "Tag3"];

  // useEffect(() => {
  //   handleBookmark(bookmark);
  // }, []);

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label=""></Avatar>}
          action={
            // <CardActions>
            <>
              <IconButton
                aria-label="add to favorites"
                onClick={() => setFavorite((prev) => !prev)}
              >
                <FavoriteIcon sx={!favorite ? { color: red[500] } : {}} />
              </IconButton>
              <IconButton
                aria-label="bookmark"
                onClick={() => setBookmark((prev) => !prev)}
              >
                {!bookmark ? (
                  <BookmarkAddedIcon sx={{ color: "green" }} />
                ) : (
                  <BookmarkIcon />
                )}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </>
            // </CardActions>
          }
          title="Username"
          subheader="Sep 14, 2016"
          // subheaderTypographyProps={{ variant: "caption" }}
        />
        <CardActionArea>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Question Title
            </Typography>
            <Typography variant="body2" color="text.primary">
              Ex sit culpa dolor ut. Est reprehenderit duis minim elit. Velit
              culpa qui reprehenderit occaecat ipsum eu eiusmod quis dolore
              tempor elit qui quis laborum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ p: "1rem" }}>
          <Grid
            spacing={1}
            container
            display={"flex"}
            alignItems={"center"}
            alignContent={"center"}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Grid item>
              {/* <Grid container item spacing={1}> */}
              {tags.map((tag, index) => (
                <Chip
                  color="primary"
                  key={index}
                  label={tag}
                  onClick={() => {}}
                  sx={{ mr: 1 }}
                  variant="outlined"
                />
                // <Grid item>
                // <Button
                //   key={index}
                //   variant="outlined"
                //   size="small"
                //   sx={{ mr: 1 }}
                // >
                //   {tag}
                // </Button>
                // </Grid>
              ))}
            </Grid>
            <Grid item>
              {/* <Grid item> */}
              <Chip
                label={`Answers: ${2}`}
                variant="outlined"
                color="success"
                sx={{ ml: { sm: 0, md: 1 } }}
              />
              {/* </Grid> */}
              {/* <Grid item> */}
              <Chip
                label={`Votes: ${3}`}
                color="info"
                variant="outlined"
                sx={{ ml: 1 }}
              />
              {/* </Grid> */}
              {/* <Grid item> */}
              <Chip
                label={`Views: ${4}`}
                color="info"
                variant="outlined"
                sx={{ ml: 1 }}
              />
              {/* </Grid> */}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {/* </Paper> */}
    </Grid>
  );
};

export default QuestionPreview;
