import React from "react";
import moment from "moment";
import parse from "html-react-parser";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
  IconButton,
  Chip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/user/context";
import { deleteQuestionById, deleteSolutionById } from "../api";

const Question = ({ data, author }) => {
  const [bookmark, setBookmark] = React.useState(true);
  const [favorite, setFavorite] = React.useState(true);

  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleDeleteQuestion = () => {
    handleClose();
    deleteQuestionById(data._id)
      .then((response) => {
        console.log(
          "🚀 ~ file: Question.jsx ~ line 37 ~ deleteQuestionById ~ response",
          response
        );
        navigate("/questions");
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Question.jsx ~ line 40 ~ deleteQuestionById ~ error",
          error
        );
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <>
      <Grid item>
        <Card variant="outlined">
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label=""></Avatar>}
            action={
              <>
                {user?._id === data?.author && (
                  <IconButton
                    LinkComponent={Link}
                    to={`/questions/${data._id}/edit`}
                  >
                    <EditIcon />
                  </IconButton>
                )}
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
                {user?._id === data?.author && (
                  <IconButton
                    aria-label="delete"
                    onClick={handleClickOpen}
                    // onClick={handleDeleteQuestion}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                )}
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </>
            }
            title={`${author?.firstName} ${author?.lastName}`}
            subheader={moment(data.createdAt).fromNow()}
          />
          <Divider />
          {/* <CardMedia component="img" image={HeaderImage} /> */}
          <CardContent>
            <Typography variant="body1" fontWeight={"bold"} gutterBottom>
              {data?.title}
            </Typography>
            {parse(data?.text)}
          </CardContent>
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
                  label={`Answers: ${2}`}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Your Question?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this question? This action is
            irreversible!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleDeleteQuestion} autoFocus variant="outlined">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Question;
