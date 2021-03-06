import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  IconButton,
  Typography,
  Skeleton,
  Button,
  Link,
  TextField,
  InputAdornment,
  styled,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  addReply,
  deleteCommentById,
  getCommentById,
  getUserById,
} from "../api";
import moment from "moment";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
// import DeleteIcon from "@mui/icons-material/DeleteForever";
import UserContext from "../context/user/context";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "2px 4px",
    "& fieldset": {
      borderRadius: "10rem",
    },
  },
});

const Comment = ({ parent, comment, handleDelete }) => {
  // const [author, setAuthor] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [replyVisible, setReplyVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [replies, setReplies] = React.useState(comment.replies);

  const { user } = React.useContext(UserContext);

  // React.useEffect(() => {
  //   // console.log(
  //   // "🚀 ~ file: Comment.jsx ~ line 34 ~ Comment ~ comment",
  //   // comment
  //   // );

  //   getUserById(comment.author)
  //     .then((response) => {
  //       // console.log(
  //       // "🚀 ~ file: Comment.jsx ~ line 24 ~ .then ~ response",
  //       // response
  //       // );
  //       setAuthor(response.data);
  //       comment.replies.forEach(async (id) => {
  //         await getCommentById(id).then((response) => {
  //           setReplies((prev) => prev.concat(response.data));
  //         });
  //       });
  //       // setTimeout(() => {
  //       setLoading(false);
  //       // }, 1000);
  //     })
  //     .catch((error) => {
  //       // console.log(
  //       // "🚀 ~ file: Comment.jsx ~ line 28 ~ React.useEffect ~ error",
  //       // error
  //       // );
  //     });
  // }, []);

  const handleSubmit = async () => {
    addReply(comment._id, { text })
      .then((response) => {
        // console.log(
        // "🚀 ~ file: Comment.jsx ~ line 63 ~ addReply ~ response",
        // response
        // );
        setReplies((prev) => prev.concat(response.data.reply));
        setText("");
        setReplyVisible(false);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 66 ~ addReply ~ error",
          error
        );
      });
  };

  const handleDeleteReply = (id) => {
    deleteCommentById(id)
      .then((response) => {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 92 ~ deleteReplyById ~ response",
          response
        );
        setReplies((prev) => prev.filter((reply) => reply._id !== id));
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Comment.jsx ~ line 95 ~ deleteReplyById ~ error",
          error
        );
      });
  };

  return (
    <Grid item container>
      <Grid item width="56px">
        <CardActions>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              src={`data:image/gif;base64,${comment.author?.avatar}`}
              children={`${comment.author.firstName[0]}`}
            />
          )}
        </CardActions>
      </Grid>
      <Grid item xs container spacing={1}>
        <Grid item width="100%">
          <Card variant="outlined">
            <CardContent
              sx={{
                padding: 1,
                "&:last-child": {
                  paddingBottom: 1,
                },
              }}
            >
              <Grid container direction="column">
                <Grid item container justifyContent="space-between">
                  <Grid
                    item
                    display="flex"
                    // xs={12}
                    sx={{
                      alignItems: "center",
                      // justifyContent: "space-between",
                    }}
                  >
                    {loading ? (
                      <Skeleton
                        animation="wave"
                        height={15}
                        width={120}
                        sx={{ mt: 0.5, mb: 0.5 }}
                      />
                    ) : (
                      <React.Fragment>
                        <Typography fontWeight="bold" mr={1}>
                          {`${comment.author?.firstName} ${comment.author?.lastName}`}
                        </Typography>
                        <Typography
                          variant="caption"
                          fontWeight="bold"
                          component="span"
                        >
                          {moment(comment?.createdAt).fromNow()}
                        </Typography>
                      </React.Fragment>
                    )}
                  </Grid>
                  <Grid item>
                    {loading ? null : (
                      <>
                        {user?._id === comment.author._id && (
                          <IconButton
                            size="small"
                            onClick={() => handleDelete(comment._id)}
                            //  sx={{ padding: 0 }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        )}
                        <IconButton
                          size="small"
                          // sx={{ padding: 0 }}
                        >
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </>
                    )}
                  </Grid>
                </Grid>
                <Grid item width="100%" pr={1}>
                  <Typography variant="body2" align="justify">
                    {loading ? (
                      <React.Fragment>
                        {Array(2)
                          .fill()
                          .map((item, index) => (
                            <Skeleton
                              key={index}
                              animation="wave"
                              height={10}
                              width="100%"
                              sx={{ mb: 0.3 }}
                              variant="text"
                            />
                          ))}
                      </React.Fragment>
                    ) : (
                      comment?.text
                    )}
                  </Typography>
                </Grid>
                {parent &&
                  (loading ? null : (
                    // <Skeleton
                    //   variant="rectangular"
                    //   animation="pulse"
                    //   width={100}
                    // >
                    //   <Link />
                    // </Skeleton>
                    <Link
                      sx={{ cursor: "pointer" }}
                      onClick={() => setReplyVisible((prev) => !prev)}
                      variant="body2"
                      width={"fit-content"}
                    >
                      Reply
                    </Link>
                  ))}
              </Grid>
            </CardContent>
          </Card>
          {replyVisible && (
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              pt={1}
            >
              {
                <RoundedTextField
                  size="small"
                  variant="outlined"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Your Reply"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setText("")}
                          size="small"
                          sx={{ mr: "1px" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleSubmit}
                          color="primary"
                          size="small"
                          type="submit"
                        >
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              }
            </Grid>
          )}
        </Grid>
        {
          // replies.length !== 0 &&
          <Grid item container>
            {parent &&
              replies.map((reply) => (
                <Comment
                  comment={reply}
                  handleDelete={handleDeleteReply}
                  key={reply._id}
                />
              ))}
            {/* {parent && <Comment comment={comment} />} */}
          </Grid>
        }
      </Grid>
    </Grid>
  );
};

export default Comment;
