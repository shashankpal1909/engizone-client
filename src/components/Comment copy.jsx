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
} from "@mui/material";
import { common, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Comment = ({ parent, comment, replies, loading }) => {
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
            <Avatar sx={{ bgcolor: red[500] }} aria-label="" />
          )}
        </CardActions>
      </Grid>
      <Grid item xs container spacing={1}>
        <Grid item width="100%">
          <Card variant="outlined">
            <CardContent
              sx={{
                padding: 0,
                pl: 1,
                "&:last-child": {
                  paddingBottom: 0.5,
                  // paddingTop: 0,
                },
              }}
            >
              <Grid container direction="column">
                <Grid
                  item
                  // width="inherit"
                  // xs={12}
                  container
                  justifyContent="space-between"
                >
                  <Grid
                    item
                    display="flex"
                    // xs={12}
                    sx={{
                      alignItems: "flex-end",
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
                        <Typography
                          fontWeight="bold"
                          mr={1}
                          // componant="span"
                        >
                          {"Username"}
                        </Typography>
                        <Typography
                          variant="caption"
                          fontWeight="bold"
                          componant="span"
                        >
                          {"5 min "} ago
                        </Typography>
                      </React.Fragment>
                    )}
                  </Grid>
                  <Grid item>
                    {loading ? null : (
                      <IconButton sx={{ padding: 0 }}>
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
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
                      { comment }
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          {loading
            ? parent && <Comment loading />
            : replies.map((reply) => (
                <Comment key={reply.id} comment={reply.comment} />
              ))}
          {/* {parent && <Comment />}
           {parent && <Comment loading />} */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
