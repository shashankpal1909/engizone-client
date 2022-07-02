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
import SendIcon from "@mui/icons-material/Send";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { SnackBar } from "../components";
import { sendContactUsMessage } from "../api";
import UserContext from "../context/user/context";

const Contact = () => {
  const { dispatch } = React.useContext(UserContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({
      type: "SET_SNACK_BAR_VISIBLE",
      payload: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    sendContactUsMessage({ name, email, message })
      .then(() => {
        dispatch({
          type: "SET_SNACK_BAR_DATA",
          payload: {
            message: "Message Sent! We will reach you shortly!",
            severity: "success",
            duration: 5000,
            handleClose: handleClose,
          },
        });
        dispatch({
          type: "SET_SNACK_BAR_VISIBLE",
          payload: true,
        });
        setName("");
        setEmail("");
        setMessage("");
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        dispatch({
          type: "SET_SNACK_BAR_DATA",
          payload: {
            message: `Error: ${error.message}`,
            severity: "error",
            duration: 5000,
            handleClose: handleClose,
          },
        });
        dispatch({
          type: "SET_SNACK_BAR_VISIBLE",
          payload: true,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

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
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={message}
                onChange={(event) => setMessage(event.target.value)}
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
