import React from "react";
import {
  Avatar,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Collapse,
  TextField,
  Divider,
  Skeleton,
} from "@mui/material";

import { Comment } from "../components";
import { red } from "@mui/material/colors";

const SolutionSkeleton = () => {
  return (
    <Grid item>
      <Card variant="outlined">
        <CardHeader
          sx={{ pb: 1 }}
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          action={null}
          title={
            <Skeleton
              animation="wave"
              height={15}
              width="30%"
              sx={{ mb: 0.5 }}
            />
          }
          subheader={<Skeleton animation="wave" height={12} width="20%" />}
        />
        <Divider />

        <CardContent sx={{ pt: 1, pb: 1 }}>
          <Typography variant="body1" color="text.primary">
            {
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={100}
                  sx={{ mb: 0.5, borderRadius: 1 }}
                  variant="rectangular"
                />
                {Array(4)
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
            }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container justifyContent="space-between" pl={1} pr={1}>
            <Grid item>
              {<Skeleton animation="wave" width={70} vairant="rectangular" />}
            </Grid>
            <Grid item>
              {<Skeleton animation="wave" width={100} vairant="rectangular" />}
            </Grid>
          </Grid>
        </CardActions>
        <Collapse timeout="auto" unmountOnExit>
          <Divider />
          <Typography variant="h6" fontWeight="bold" p={2} pb={0}>
            Comments
          </Typography>
          <Grid container direction="column" pl={1} pr={2} pt={0} spacing={1}>
            <Grid item>
              <CardActions sx={{ pr: 0 }}>
                <Avatar sx={{ bgcolor: red[500] }} />
                <TextField
                  multiline
                  size="small"
                  variant="filled"
                  placeholder="Your Thoughts"
                  sx={{ width: "100%", mr: 1 }}
                />
                <Button variant="contained" color="primary">
                  Post
                </Button>
                <Button variant="outlined" color="primary">
                  Cancel
                </Button>
              </CardActions>
            </Grid>
            {Array(2)
              .fill()
              .map((item, index) => (
                <Comment key={index} parent loading />
              ))}
          </Grid>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default SolutionSkeleton;
