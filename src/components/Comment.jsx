import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Grid,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Comment = (props) => {
  return (
    <Grid item container justifyContent="flex-end">
      <Grid item width="56px">
        <CardActions>
          <Avatar sx={{ bgcolor: red[500] }} />
        </CardActions>
      </Grid>
      <Grid item xs container spacing={1}>
        <Grid item>
          <Card variant="outlined">
            <CardContent
              sx={{
                padding: 1,
                "&:last-child": {
                  paddingBottom: 1,
                },
              }}
            >
              <Grid container p={0.5} pt={0} justifyContent="space-between">
                <Grid
                  item
                  display="flex"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontWeight="bold" componant="span" mr={1}>
                    Username
                  </Typography>
                  <Typography
                    variant="caption"
                    // fontWeight="bold"
                    component="span"
                  >
                    {"5 mins "} ago
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    size="small"
                    // sx={{ padding: 0 }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="body2" align="justify">
                    Sint proident enim pariatur pariatur in minim ea magna do.
                    Voluptate deserunt anim magna ullamco sunt. Ullamco aute
                    sunt veniam quis commodo aliqua adipisicing est anim nostrud
                    consequat cupidatat aliquip incididunt. Labore mollit nisi
                    enim adipisicing occaecat commodo voluptate ea non Lorem
                    dolore.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          {props.parent && <Comment />}
          {props.parent && <Comment />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
