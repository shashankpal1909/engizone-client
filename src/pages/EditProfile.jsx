import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import Context from "../context/user/context";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../api";
import { Loading } from "../components";

import jwt_decode from "jwt-decode";

const Input = styled("input")({
  display: "none",
});

const EditProfile = () => {
  const { loading, dispatch } = React.useContext(Context);

  const [currentUser, setCurrentUser] = React.useState({});
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [avatarFile, setAvatarFile] = React.useState(undefined);
  const [previewFile, setPreviewFile] = React.useState(undefined);

  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    const userJWT = localStorage.getItem("userJWT");
    if (userJWT) {
      try {
        const decoded = jwt_decode(userJWT);
        console.log(
          "🚀 ~ file: EditProfile.jsx ~ line 48 ~ React.useEffect ~ decoded",
          decoded
        );
        if (decoded._id !== id) navigate("/");
        else {
          dispatch({ type: "SET_LOADING", payload: true });
          api
            .getUser(id)
            .then((response) => {
              setCurrentUser(response.data.user);
              setFirstName(response.data.user.firstName);
              setLastName(response.data.user.lastName);
              setEmail(response.data.user.email);
              setAge(response.data.user.age);
              setPhoneNumber(response.data.user.phoneNumber);
              dispatch({ type: "SET_LOADING", payload: false });
            })
            .catch((error) => {
              console.log(
                "🚀 ~ file: EditProfile.jsx ~ line 63 ~ api.getUserById ~ error",
                error
              );
            });
        }
      } catch (error) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    if (avatarFile) {
      let formData = new FormData();
      formData.append("avatar", avatarFile);
      api
        .uploadAvatar(formData)
        .then((response) => {
          console.log(
            "🚀 ~ file: EditProfile.jsx ~ line 69 ~ api.uploadAvatar ~ response",
            response
          );
          dispatch({ type: "SET_DETAILS", payload: response.data.user });
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: EditProfile.jsx ~ line 72 ~ api.uploadAvatar ~ error",
            error
          );
        });
    }
    api
      .updateUserDetails({ firstName, lastName, age, phoneNumber })
      .then((response) => {
        console.log(
          "🚀 ~ file: EditProfile.jsx ~ line 28 ~ updateUserDetails ~ re̥sponse",
          response
        );
        dispatch({ type: "SET_DETAILS", payload: response.data });
        dispatch({ type: "SET_LOADING", payload: false });
        navigate(`/profile/${id}`);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: EditProfile.jsx ~ line 31 ~ updateUserDetails ~ error",
          error
        );
      });
  };

  if (loading) return <Loading />;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: "2rem", md: "4rem" },
          pb: { xs: "2rem", md: "4rem" },
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Profile
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <label
                htmlFor="icon-button-file"
                style={{
                  cursor: "pointer",
                  width: "min-content",
                }}
              >
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  onChange={(event) => {
                    setAvatarFile(event.target.files[0]);
                    setPreviewFile(URL.createObjectURL(event.target.files[0]));
                    console.log(
                      "🚀 ~ file: EditProfile.jsx ~ line 120 ~ EditProfile ~ previewFile",
                      previewFile
                    );
                    console.log(
                      "🚀 ~ file: EditProfile.jsx ~ line 120 ~ EditProfile ~ avatarFile",
                      avatarFile
                    );
                  }}
                  type="file"
                />
                {!previewFile ? (
                  currentUser && (
                    <Avatar
                      src={`data:image/gif;base64,${currentUser?.avatar}`}
                      sx={{ width: 200, height: 200 }}
                    />
                  )
                ) : (
                  <Avatar src={previewFile} sx={{ width: 200, height: 200 }} />
                )}
              </label>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                disabled
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                label="Age"
                id="age"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                disabled={phoneNumber !== ""}
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                name="mobile-number"
                label="Mobile Number"
                id="mobile-number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SAVE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditProfile;
