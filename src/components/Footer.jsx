import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Link,
  Grid,
  Fab,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
const Footer = () => {
  const pages = ["Home", "Questions", "Resources", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Grid
      bgcolor={"grey.200"}
      container
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, md: 4 }}
      justifyContent={"center"}
      // alignItems={"center"}
      sx={{ p: { xs: "1rem", md: "2rem" } }}
    >
      <Grid item xs={4}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography
              variant="h4"
              color="secondary"
              // sx={{ maxWidth: "500px" }}
              fontWeight="500"
              paragraph
            >
              EngiZone
            </Typography>
            <Typography variant="body1" color="text.secondary" align="justify" paragraph>
              EngiZone is a platform where you can post your question and get best answer instantly.
              We want to connect peple who wants to share their knowledge in effective way to the
              people who need it.
            </Typography>
            <Button variant="outlined" color="info">
              See Details
            </Button>
          </Grid>
          {/* <Grid item>
            <Typography
              variant="h5"
              color="secondary"
              // sx={{ maxWidth: "500px" }}
              fontWeight="500"
            >
              Quick Links
            </Typography>
            <Typography>Home | Questions | Resources</Typography>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Typography
          variant="h5"
          color="secondary"
          // sx={{ maxWidth: "500px" }}
          fontWeight="500"
          paragraph
        >
          Contact Us
        </Typography>
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                rows={4}
              />
            </Grid>
            <Grid item sx={{ width: "inherit", display: "flex", justifyContent: "flex-end" }}>
              <Fab type="submit" component={Button} color="primary" variant="extended">
                <SendIcon sx={{ mr: 1 }} /> Send
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

/* <Box
      position="static"
      bottom={0}
      // width="100vw"
      // bgcolor="#1a2027"
      // sx={{ colorScheme: "dark" }}
      display="flex"
      justifyContent="space-around"
      // sx={{ justifyCenter: "center" }}
    >
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          // textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="25px" fontWeight="bold" fontStyle="italic">
            engiZone
          </Typography>
          <Typography variant="body1" multiline textAlign="justify" color="#b4b4b4">
            Anim enim aliqua dolore elit. Est est est anim nostrud. Labore mollit velit adipisicing
            aute tempor minim qui ea proident nostrud sunt velit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="20px" fontStyle="italic">
            Quick Links
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {pages.map((page) => (
            <Link variant="body1" key="page" href="/" underline="none" color="#b4b4b4">
              {page}
            </Link>
          ))}
        </CardActions>
      </Card>
      <Card
        // variant="outlined"
        bgcolor="#1a2027"
        sx={{
          width: "20vw",
          bgcolor: "#1a2027",
          // bgcolor: "#1e1e1e",
          color: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="outlined" fontSize="20px" fontStyle="italic">
            Quick Links
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {settings.map((setting) => (
            <Link variant="body1" key={setting} href="/" underline="none" color="#b4b4b4">
              {setting}
            </Link>
          ))}
        </CardActions>
      </Card>
    </Box> */
