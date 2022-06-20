import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
  Chip,
  Divider,
} from "@mui/material";

import { getUserById } from "../api";
import QuestionSkeleton from "./QuestionSkeleton";

const QuestionPreview = ({ data }) => {
  const [bookmark, setBookmark] = React.useState(true);
  const [favorite, setFavorite] = React.useState(true);
  const [author, setAuthor] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log(data);
    getUserById(data.author)
      .then((response) => {
        // console.log(
        // "🚀 ~ file: QuestionPreview.jsx ~ line 39 ~ .then ~ response",
        // response
        // );
        setAuthor(response.data);
        // setTimeout(() => {
        setLoading(false);
        // }, 1000);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: QuestionPreview.jsx ~ line 43 ~ React.useEffect ~ error",
        // error
        // );
      });
  }, []);

  if (loading) {
    return <QuestionSkeleton />;
  }

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label=""></Avatar>}
          action={
            <>
              <IconButton
                aria-label="add to favorites"
                onClick={() => setFavorite((prev) => !prev)}
              >
                {/* <EditIcon /> */}
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
          }
          title={`${author?.firstName} ${author?.lastName}`}
          subheader={moment(data.createdAt).fromNow()}
        />
        <Divider />
        <CardActionArea LinkComponent={Link} to={`/questions/${data?._id}`}>
          <CardContent>
            <Typography variant="body1" fontWeight={"bold"} gutterBottom>
              {data?.title}
            </Typography>
            {parse(data?.text)}
          </CardContent>
        </CardActionArea>
        <Divider />
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
              {data?.tags.map((tag, index) => (
                <Chip
                  color="primary"
                  key={index}
                  label={tag}
                  onClick={() => {}}
                  sx={{ mr: 1 }}
                  variant="outlined"
                />
              ))}
            </Grid>
            <Grid item>
              <Chip
                label={`Answers: ${data?.solutions.length}`}
                variant="outlined"
                color="success"
                sx={{ ml: { sm: 0, md: 1 } }}
              />
              <Chip
                label={`Votes: ${3}`}
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
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default QuestionPreview;
