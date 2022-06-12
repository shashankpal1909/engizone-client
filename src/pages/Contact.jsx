import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Fab,
  Container,
  CssBaseline,
  Avatar,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Contact = () => {
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        display: "flex",
        pt: { xs: "2rem", md: "4rem" },
        pb: { xs: "2rem", md: "4rem" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid item container justifyContent={"center"} direction="column">
          <Grid item display={"flex"} justifyContent="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <ContactSupportIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography component="h1" align="center" variant="h5" paragraph>
              Contact Us
            </Typography>
          </Grid>
        </Grid>
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={8}
              />
            </Grid>
            <Grid
              item
              sx={{
                width: "inherit",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Fab
                type="submit"
                component={Button}
                color="primary"
                variant="extended"
              >
                <SendIcon sx={{ mr: 1 }} /> Send
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Contact;
