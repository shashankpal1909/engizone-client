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
  IconButton,
  Chip,
  Skeleton,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeaderImage from "../assets/HeaderImage.jpg";

const Question = ({ title, statement, tags, loading }) => {
  const [bookmark, setBookmark] = useState(true);
  const [favorite, setFavorite] = useState(true);
  // const tags = ["Tag", "Tag", "Tag"];

  const handleBookmark = (bookmark) => {
    console.log(bookmark);

    setBookmark((prev) => !prev);
  };
  // useEffect(() => {
  //   handleBookmark(bookmark);
  // }, []);

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          sx={{ pb: 1 }}
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar sx={{ bgcolor: red[500] }} aria-label="" />
            )
          }
          action={
            loading ? null : (
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
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={15}
                width="30%"
                sx={{ mb: 1 }}
              />
            ) : (
              "Username"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="20%" />
            ) : (
              "Sep 14, 2016"
            )
          }
          // subheaderTypographyProps={{ variant: "caption" }}
        />
        <Divider />

        {/* {loading ? (
          <Skeleton
            animation="wave"
            height={100}
            sx={{ mb: 0.5}}
            variant="rectangular"
          />
        ) : (
          <CardMedia component="img" image={HeaderImage} />
        )} */}

        {/* <CardActionArea component={Link} to={`/questions/${question_id}`}> */}
        <CardContent sx={{ pt: 1, pb: 1 }}>
          <Typography variant="body1" gutterBottom>
            {loading ? <Skeleton animation="wave" /> : title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {/* Ex sit culpa dolor ut. Est reprehenderit duis minim elit. Velit
              culpa qui reprehenderit occaecat ipsum eu eiusmod quis dolore
              tempor elit qui quis laborum. */}
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={100}
                  sx={{ mb: 0.5, borderRadius: 1 }}
                  variant="rectangular"
                />
                {Array(3)
                  .fill()
                  .map((item, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      height={15}
                      sx={{ mb: 0.3 }}
                      variant="text"
                    />
                  ))}
              </React.Fragment>
            ) : (
              statement
            )}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions sx={{ pl: 2, pr: 2 }}>
          <Grid
            spacing={1}
            container
            // display={"flex"}
            alignItems={"center"}
            // alignContent={"center"}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Grid item display="flex">
              {/* <Grid container item spacing={1}> */}
              {loading ? (
                <React.Fragment>
                  {Array(3)
                    .fill()
                    .map((item, index) => (
                      <Skeleton
                        key={index}
                        animation="wave"
                        width={70}
                        height={30}
                        sx={{ mr: 1, borderRadius: 2 }}
                      />
                    ))}
                </React.Fragment>
              ) : (
                tags.map((tag) => (
                  <Chip
                    color="primary"
                    key={tag.id}
                    label={tag.tag_name}
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
                ))
              )}
            </Grid>
            <Grid item display="flex">
              {/* <Grid item> */}
              {loading ? (
                <React.Fragment>
                  {Array(3)
                    .fill()
                    .map((item, index) => (
                      <Skeleton
                        key={index}
                        animation="wave"
                        width={70}
                        height={30}
                        sx={{ mr: 1, borderRadius: 2 }}
                      />
                    ))}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Chip
                    label={`Answers: ${2}`}
                    variant="outlined"
                    color="success"
                    sx={{ ml: { sm: 0, md: 1 } }}
                  />
                  <Chip
                    label={`Views: ${4}`}
                    color="info"
                    variant="outlined"
                    sx={{ ml: 1 }}
                  />
                  <Chip
                    label={`Views: ${4}`}
                    color="info"
                    variant="outlined"
                    sx={{ ml: 1 }}
                  />
                </React.Fragment>
              )}
              {/* </Grid> */}
              {/* <Grid item> */}
              {/* {loading ? (
                <Skeleton
                  animation="wave"
                  width={70}
                  height={30}
                  sx={{ mr: 1 }}
                />
              ) : (
                <Chip
                  label={`Answers: ${2}`}
                  variant="outlined"
                  color="success"
                  sx={{ ml: { sm: 0, md: 1 } }}
                />
              )}
              {loading ? (
                <Skeleton
                  animation="wave"
                  width={70}
                  height={30}
                  sx={{ mr: 1 }}
                />
              ) : (
                <Chip
                  label={`Votes: ${3}`}
                  color="info"
                  variant="outlined"
                  sx={{ ml: 1 }}
                />
              )}
              {loading ? (
                <Skeleton
                  animation="wave"
                  width={70}
                  height={30}
                  sx={{ mr: 1 }}
                />
              ) : (
                <Chip
                  label={`Views: ${4}`}
                  color="info"
                  variant="outlined"
                  sx={{ ml: 1 }}
                />
              )} */}
              {/* </Grid> */}
              {/* <Grid item> */}

              {/* </Grid> */}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {/* </Paper> */}
    </Grid>
  );
};

export default Question;
