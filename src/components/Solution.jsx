import React from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  TextField,
  Divider,
  InputAdornment,
  Dialog,
  DialogContent,
  Button,
  useMediaQuery,
  AppBar,
  Toolbar,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import { styled, useTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import moment from "moment";
import parse from "html-react-parser";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import { Comment } from "../components";
import {
  addComment,
  deleteCommentById,
  getCommentById,
  getUserById,
  updateSolutionById,
  voteSolution,
} from "../api";
import UserContext from "../context/user/context";
import SolutionSkeleton from "./SolutionSkeleton";
import TextEditor from "./TextEditor";
import Slide from "@mui/material/Slide";
import DeleteForever from "@mui/icons-material/DeleteForever";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CommentSection = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "6px",
    "& fieldset": {
      borderRadius: "10rem",
    },
  },
});

const Solution = ({ solution, handleDelete }) => {
  const [author, setAuthor] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");
  const [currentSolution, setCurrentSolution] = React.useState(solution);
  const [solutionText, setSolutionText] = React.useState(solution?.text);
  const [showComments, setShowComments] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [openEditSolutionDialog, setOpenEditSolutionDialog] =
    React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenEditSolutionDialog = () => {
    setOpenEditSolutionDialog(true);
    setSolutionText(currentSolution.text);
  };

  const handleCloseEditSolutionDialog = () => {
    setOpenEditSolutionDialog(false);
  };

  const handleBodyChange = (event, editor) => {
    setSolutionText(editor.getData());
  };
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    // setSolution(data);
    getUserById(currentSolution.author)
      .then((response) => {
        // console.log(
        // "🚀 ~ file: QuestionPreview.jsx ~ line 39 ~ .then ~ response",
        // response
        // );
        setAuthor(response.data);

        currentSolution.comments.forEach(async (id) => {
          await getCommentById(id).then((response) => {
            // console.log(
            // "🚀 ~ file: Solution.jsx ~ line 72 ~ getCommentById ~ response",
            // response
            // );
            setComments((prev) => [response.data].concat(prev));
          });
        });
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    addComment({ solutionId: currentSolution._id, text: commentText })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 89 ~ addComment ~ response",
        // response
        // );
        setComments((prev) => [response.data.comment].concat(prev));
        setCommentText("");
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 97 ~ handleSubmit ~ error",
        // error
        // );
      });
  };

  const handleVote = async (type) => {
    voteSolution(currentSolution._id, { type })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 107 ~ voteSolution ~ response",
        // response
        // );
        setCurrentSolution(response.data);
      })
      .catch((error) => {
        // console.log(
        // "🚀 ~ file: Solution.jsx ~ line 110 ~ voteSolution ~ error",
        // error
        // );
      });
  };

  const handleUpdateSolution = () => {
    updateSolutionById(solution._id, { text: solutionText })
      .then((response) => {
        // console.log(
        //   "🚀 ~ file: Solution.jsx ~ line 161 ~ updateSolutionById ~ response",
        //   response
        // );
        setCurrentSolution(response.data.solution);
        handleCloseEditSolutionDialog();
      })
      .catch((error) => {
        // console.log(
        //   "🚀 ~ file: Solution.jsx ~ line 164 ~ updateSolutionById ~ error",
        //   error
        // );
      });
  };

  const handleDeleteComment = (id) => {
    console.log("🚀 ~ file: Solution.jsx ~ line 188 ~ Solution ~ id", id);
    console.log(
      "🚀 ~ file: Solution.jsx ~ line 204 ~ handleDeleteComment ~ solution._id",
      solution._id
    );
    deleteCommentById(id, { solutionId: solution._id })
      .then((response) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 191 ~ deleteCommentById ~ response",
          response
        );
        setComments((prev) => prev.filter((comment) => comment._id !== id));
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Solution.jsx ~ line 194 ~ deleteCommentById ~ error",
          error
        );
      });
  };

  if (loading) {
    return <SolutionSkeleton />;
  }

  return (
    <>
      <Grid item>
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar src={author.avatar} children={`${author.firstName[0]}`} />
            }
            action={
              <>
                {currentSolution.author === user?._id && (
                  <IconButton onClick={handleClickOpenEditSolutionDialog}>
                    <EditIcon />
                  </IconButton>
                )}
                {currentSolution.author === user?._id && (
                  <IconButton
                    onClick={handleClickOpen}
                    // onClick={() => handleDelete(solution._id)}
                  >
                    <DeleteForever />
                  </IconButton>
                )}
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </>
            }
            title={`${author?.firstName} ${author?.lastName}`}
            subheader={moment(currentSolution?.createdAt).fromNow()}
          />
          <Divider />
          {/* <CardMedia component="img" image={HeaderImage} /> */}
          <CardContent>
            <div className="ck-content" style={{ wordBreak: "break-all" }}>
              {parse(currentSolution?.text)}
            </div>
            {/* <Typography variant="body1" color="text.primary">
          </Typography> */}
          </CardContent>
          <Divider />
          <CardActions disableSpacing>
            <Grid container justifyContent="space-between">
              <Grid item>
                <IconButton
                  // disabled={!user?.id}
                  aria-label="upVote"
                  onClick={() => handleVote(1)}
                >
                  {currentSolution?.upVotes.find((id) => id === user?._id) ? (
                    <ThumbUpIcon color="primary" />
                  ) : (
                    <ThumbUpOutlinedIcon />
                  )}
                </IconButton>
                {currentSolution?.upVotes.length}
                <IconButton
                  // disabled={!user?.id}
                  aria-label="downVote"
                  onClick={() => handleVote(-1)}
                >
                  {currentSolution?.downVotes.find((id) => id === user?._id) ? (
                    <ThumbDownIcon color="secondary" />
                  ) : (
                    <ThumbDownAltOutlinedIcon />
                  )}
                </IconButton>
                {currentSolution?.downVotes.length}
              </Grid>
              <Grid item>
                {currentSolution?.comments.length} Comments
                <CommentSection
                  expand={showComments}
                  onClick={() => setShowComments((prev) => !prev)}
                  aria-expanded={showComments}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </CommentSection>
              </Grid>
            </Grid>
          </CardActions>
          <Collapse in={showComments} timeout="auto" unmountOnExit>
            <Divider />
            <Typography variant="h6" fontWeight="bold" pl={2} pt={1} pr={2}>
              Comments
            </Typography>
            <Grid container direction="column" padding={1} spacing={1}>
              <Grid item>
                <CardActions>
                  {user ? (
                    <Avatar
                      src={user?.avatar}
                      children={`${user?.firstName[0]}`}
                    />
                  ) : (
                    <Avatar sx={{ bgcolor: red[500] }} />
                  )}
                  <RoundedTextField
                    size="small"
                    variant="outlined"
                    placeholder="Your Thoughts"
                    fullWidth
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              setCommentText("");
                            }}
                            size="medium"
                            sx={{ mr: "1px" }}
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            <ClearIcon />
                          </IconButton>

                          <IconButton
                            onClick={handleSubmit}
                            color="primary"
                            size="medium"
                            type="submit"
                          >
                            <SendIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </CardActions>
              </Grid>
              {comments.map((comment, _index) => (
                <Comment
                  parent
                  key={comment?._id}
                  comment={comment}
                  handleDelete={handleDeleteComment}
                />
              ))}
            </Grid>
          </Collapse>
        </Card>
      </Grid>
      <Dialog
        // fullWidth={fullScreen}
        maxWidth="md"
        fullScreen={fullScreen}
        open={openEditSolutionDialog}
        scroll="body"
        onClose={handleCloseEditSolutionDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseEditSolutionDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Your Solution
            </Typography>
            {/* <IconButton
              edge="end"
              color="inherit"
              onClick={handleUpdateSolution}
            >
              <SaveIcon />
            </IconButton> */}
            <Button
              autoFocus
              color="inherit"
              variant="text"
              onClick={handleUpdateSolution}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <DialogTitle sx={{ p: "16px" }}>Edit Your Solution</DialogTitle> */}
        <DialogContent sx={{ p: "16px", pb: 0 }}>
          <TextEditor data={solutionText} handleChange={handleBodyChange} />
        </DialogContent>
        {/* <DialogActions sx={{ p: "16px", pt: 0 }}>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleUpdateSolution} variant="contained">
            Update
          </Button>
        </DialogActions> */}
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Your Solution?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this solution? This action is
            irreversible!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(solution._id)}
            autoFocus
            variant="outlined"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Solution;
