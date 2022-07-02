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

import { getUserById, toggleBookmark } from "../api";
import QuestionSkeleton from "./QuestionSkeleton";
import UserContext from "../context/user/context";

const QuestionPreview = ({ data }) => {
  const { user } = React.useContext(UserContext);

  const [bookmark, setBookmark] = React.useState(true);
  const [favorite, setFavorite] = React.useState(true);
  const [author, setAuthor] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setBookmark(data.bookmarks.includes(user?._id));
  }, [data.bookmarks, user]);

  const handleBookmarkToggle = () => {
    toggleBookmark(data._id)
      .then((response) => {
        setBookmark((prev) => !prev);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Question.jsx ~ line 83 ~ toggleBookmark ~ error",
          error
        );
      });
  };

  if (loading) {
    return <QuestionSkeleton />;
  }

  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              src={`data:image/gif;base64,${data.author?.avatar}`}
              children={`${data.author.firstName[0]}`}
            />
          }
          action={
            <>
              <IconButton aria-label="bookmark" onClick={handleBookmarkToggle}>
                {bookmark ? (
                  <BookmarkAddedIcon color="primary" />
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
          title={`${data.author?.firstName} ${data.author?.lastName}`}
          subheader={moment(data.createdAt).fromNow()}
        />
        <Divider />
        <CardActionArea LinkComponent={Link} to={`/questions/${data?._id}`}>
          <CardContent>
            <Typography variant="body1" fontWeight={"bold"} gutterBottom>
              {data?.title}
            </Typography>
            <div className="ck-content" style={{ wordBreak: "break-all" }}>
              {parse(data?.text)}
            </div>
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
                label={`Answers: ${data?.solutionCount}`}
                variant="outlined"
                color="success"
                sx={{ ml: { sm: 0, md: 1 } }}
              />
              {/*<Chip*/}
              {/*  label={`Votes: ${3}`}*/}
              {/*  color="info"*/}
              {/*  variant="outlined"*/}
              {/*  sx={{ ml: 1 }}*/}
              {/*/>*/}
              {/*<Chip*/}
              {/*  label={`Views: ${4}`}*/}
              {/*  color="info"*/}
              {/*  variant="outlined"*/}
              {/*  sx={{ ml: 1 }}*/}
              {/*/>*/}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default QuestionPreview;
