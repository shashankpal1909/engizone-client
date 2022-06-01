import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import React from "react";

const ContactUs = () => {
  return (
    <Box spacing={2} p={6}>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px"}}>
        <form>
          <CardContent>
            <Typography variant="h3" fontWeight={400} gutterBottom textAlign="center">
              Contact Us
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Name"
                placeholder="Your name"
                variant="outlined"
                required
              />
              <TextField
                type="email"
                label="Email"
                placeholder="Your Email"
                variant="outlined"
                required
              />
              <TextField
                type="message"
                multiline
                rows={5}
                label="Message"
                placeholder="Message"
                variant="outlined"
                required
              />
            </Stack>
            <Button variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </CardContent>
        </form>
      </Card>
    </Box>
  );
};

export default ContactUs;
